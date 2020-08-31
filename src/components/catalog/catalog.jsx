import React from "react";
import Product from "../product/product.jsx";
import PropTypes from "prop-types";

const Catalog = (props) => {
  const {products} = props;
  return (
    <section className="catalog">
      <div className="catalog__container container">
        <h2 className="catalog__title">Ты сегодня покормил кота?</h2>
        <form>
          <ul className="catalog__list">
            {products.map((it) =>
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

Catalog.propTypes = {
  products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        taste: PropTypes.string.isRequired,
        numberOfServings: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
  ),
};

export default Catalog;
