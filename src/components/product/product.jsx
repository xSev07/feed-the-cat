import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {calculateBonus, declOfNum} from '../../utils/common/common';
import {Declination, EventsMouse, Multiplicity} from '../../const';

class Product extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      displayQuestion: false,
    };

    this._ended = props.product.balance <= 0;
    this._checkboxRef = createRef();

    this._handlerProductClick = this._handlerProductClick.bind(this);
    this._calculateAdditionalCaption = this._calculateAdditionalCaption.bind(this);
    this._changeDisplayingQuestion = this._changeDisplayingQuestion.bind(this);
  }

  _handlerProductClick(evt) {
    evt.preventDefault();

    if (this._ended) {
      return;
    }

    this.setState((prevState) => {
      const selected = !prevState.selected;
      this._checkboxRef.current.checked = selected;
      return {selected};
    });
  }

  _changeDisplayingQuestion(evt) {
    if (!this.state.selected) {
      return;
    }
    this.setState({displayQuestion: evt.type === EventsMouse.MOUSE_LEAVE});
  }

  _calculateAdditionalCaption() {
    const {taste, description} = this.props.product;
    if (this._ended) {
      return `Печалька, ${taste} закончился`;
    }

    if (this.state.selected) {
      return description;
    }

    return (
      <>
        Чего сидишь? Порадуй котэ,
        <a className='catalog__buy' href='#' onClick={this._handlerProductClick}> купи</a>
      </>
    );
  }

  render() {
    const {id, caption, brand, taste, numberOfServings,
      weight, unit} = this.props.product;
    const {selected, displayQuestion} = this.state;
    const captionMain = displayQuestion ? `Котэ не одобряет?` : caption;

    const declServing = declOfNum(numberOfServings, Declination.SERVING);
    const mouseCount = calculateBonus(numberOfServings, Multiplicity.SERVING);
    const declMouse = declOfNum(mouseCount, Declination.MOUSE);

    return (
      <li className={`
          catalog__item
          ${this._ended ? ` catalog__item--disabled` : ``}
          ${selected ? ` catalog__item--selected` : ``}
        `}
      >
        <input ref={this._checkboxRef} id={id} className='hidden' type='checkbox'/>
        <a
          className='catalog__content'
          href='#'
          onClick={this._handlerProductClick}
          onMouseLeave={this._changeDisplayingQuestion}
          onMouseEnter={this._changeDisplayingQuestion}
        >
          <p className={`catalog__caption-main ${displayQuestion ? `catalog__caption-main--showed-question` : ``}`}>
            {captionMain}
          </p>
          <h3 className='catalog__name-container'>
            <span className='catalog__name-brand'>{brand}</span>
            <br/>
            <span className='catalog__name-taste'>{taste}</span>
          </h3>
          <p className='catalog__spec'>
            <span className='catalog__quantity'>{numberOfServings} </span>
            {declServing}
            <br/>
            {mouseCount > 1 && <span className='catalog__quantity'>{mouseCount} </span>}
            {declMouse} в подарок
            <br/>
            {numberOfServings >= Multiplicity.SATISFIED_CUSTOMER && `заказчик доволен`}
          </p>
          <div className='catalog__picture-container'>
            <picture>
              <source type='image/webp' srcSet='assets/img/cat_preview.webp'/>
              <img className='catalog__picture' src='assets/img/cat_preview.png' width='260' height='275'
                alt={`${brand} ${taste}`}/>
            </picture>
          </div>
          <div className='catalog__size-container'>
            <p className='catalog__size-value'>{weight.toString().replace(`.`, `,`)}</p>
            <p className='catalog__size-unit'>{unit}</p>
          </div>
        </a>
        <p className='catalog__caption-additional'>
          {this._calculateAdditionalCaption()}
        </p>
      </li>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    taste: PropTypes.string.isRequired,
    numberOfServings: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }),
};

export default Product;
