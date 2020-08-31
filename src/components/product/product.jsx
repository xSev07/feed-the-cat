import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {calculateBonus, declOfNum, deleteExtraSpaces} from '../../utils/common/common';
import {Declination, Multiplicity} from '../../const';
import withActiveStatus from "../../hocs/with-active-status/with-active-status.jsx";
import withMouseLeaveEvent from "../../hocs/with-mouse-leave-event/with-mouse-leave-event.jsx";

class Product extends PureComponent {
  constructor(props) {
    super(props);

    this._ended = props.product.balance <= 0;

    this._handlerProductClick = this._handlerProductClick.bind(this);
    this._calculateAdditionalCaption = this._calculateAdditionalCaption.bind(this);
    this._changeDisplayingQuestion = this._changeDisplayingQuestion.bind(this);
  }

  _handlerProductClick(evt) {
    evt.preventDefault();

    if (!this._ended) {
      this.props.onElementClick();
    }
  }

  _changeDisplayingQuestion(evt) {
    if (this.props.isActive) {
      this.props.onMouseLeave(evt);
    }
  }

  _calculateAdditionalCaption() {
    const {taste, description} = this.props.product;
    if (this._ended) {
      return `Печалька, ${taste} закончился`;
    }

    if (this.props.isActive) {
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
    const {product, isActive, isMouseLeave} = this.props;
    const {id, caption, brand, taste, numberOfServings,
      weight, unit} = product;
    const captionMain = isMouseLeave ? `Котэ не одобряет?` : caption;

    const declServing = declOfNum(numberOfServings, Declination.SERVING);
    const mouseCount = calculateBonus(numberOfServings, Multiplicity.SERVING);
    const declMouse = declOfNum(mouseCount, Declination.MOUSE);

    return (
      <li className={deleteExtraSpaces(`catalog__item
        ${this._ended ? ` catalog__item--disabled` : ``}
        ${isActive ? ` catalog__item--selected` : ``}
      `)}
      >
        <input id={id} readOnly className='hidden' type='checkbox' checked={isActive}/>
        <a
          className='catalog__content'
          href='#'
          onClick={this._handlerProductClick}
          onMouseLeave={this._changeDisplayingQuestion}
          onMouseEnter={this._changeDisplayingQuestion}
        >
          <p className={`catalog__caption-main${isMouseLeave ? ` catalog__caption-main--showed-question` : ``}`}>
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
  isActive: PropTypes.bool.isRequired,
  isMouseLeave: PropTypes.bool.isRequired,
  onElementClick: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export {Product};
export default withActiveStatus(withMouseLeaveEvent(Product));
