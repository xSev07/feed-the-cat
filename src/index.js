import "./assets/scss/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import Catalog from "./js/components/catalog/catalog.jsx";
import {catalogItems} from "./js/mocks/catalog-items";

const init = () => {
  ReactDOM.render(
      <Catalog
        products={catalogItems}
      />,
      document.querySelector(`#root`)
  );
};

init();
