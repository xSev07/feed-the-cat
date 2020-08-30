import React from "react";
import {catalogItems} from "../../mocks/catalog-items";
import Product from "../product/product.jsx";

const Catalog = () => {
  return (
    <section className="catalog">
      <div className="catalog__container container">
        <h2 className="catalog__title">Ты сегодня покормил кота?</h2>
        <form>
          <ul className="catalog__list">
            {catalogItems.map((it) =>
              <Product
                key={it.id}
                product={it}
              />
            )}
          </ul>
        </form>
      </div>
    </section>
  );
};

export default Catalog;
