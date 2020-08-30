import React from "react";
import Product from "../product/product.jsx";
import {catalogItems} from "../../mocks/catalog-items";

const Catalog = () => {
  return (
    <section className="catalog">
      <div className="catalog__container container">
        <h2 className="catalog__title">Ты сегодня покормил кота?</h2>
        <ul className="catalog__list">
          {catalogItems.map((it) => {
            return (
              <Product
                key={it.id}
                item={it}
              />
            )
          })}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
