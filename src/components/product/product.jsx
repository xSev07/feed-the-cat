import React from "react";

const declOfNum = (n, text_forms) => {
  n = Math.abs(n) % 100; const n1 = n % 10;
  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }
  return text_forms[2];
};

const Product = (props) => {
  const {item} = props;
  const {captionMain, brand, taste, numberOfServings, weight, unit,
    description} = item;
  
  const declServing = declOfNum(numberOfServings, [`порция`, `порции`, `порций`]);
  const t2 = Math.floor(numberOfServings / 20);
  const mouseCount = t2 > 1? t2 : 1;
  const declMouse = declOfNum(mouseCount, [`мышь`, `мыши`, `мышей`]);
  
  return (
    <li className="catalog__item">
      <input className="hidden" type="checkbox" id="item-1"/>
      <a className="catalog__content" href="#">
        <p className="catalog__caption-main">{captionMain}</p>
        <h3 className="catalog__name-container">
          <span className="catalog__name-brand">{brand}</span>
          <br/>
          <span className="catalog__name-taste">{taste}</span>
        </h3>
        <p className="catalog__spec">
          <span className="catalog__quantity">{numberOfServings} </span>
          {declServing}
          <br/>
          {mouseCount > 1 && <span className="catalog__quantity">{mouseCount} </span>}
          {declMouse} в подарок
          <br/>
          {numberOfServings >= 100 && `заказчик доволен`}
        </p>
        <div className="catalog__picture-container">
          <picture>
            <source type="image/webp" srcSet="assets/img/cat_preview.webp"/>
            <img className="catalog__picture" src="assets/img/cat_preview.png" width="260" height="275"
                 alt={`${brand} ${taste}`}/>
          </picture>
        </div>
        <div className="catalog__size-container">
          <p className="catalog__size-value">{weight}</p>
          <p className="catalog__size-unit">{unit}</p>
        </div>
      </a>
      <p className="catalog__caption-additional">
        {description}
        {/*Чего сидишь? Порадуй котэ,*/}
        {/*<a className="catalog__buy" href="#"> купи</a>*/}
      </p>
    </li>
  );
};

export default Product;
