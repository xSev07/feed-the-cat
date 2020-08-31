import './assets/css/main.css';
import './assets/scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Catalog from "./components/catalog/catalog.jsx";
import {catalogItems} from "./mocks/catalog-items";

const init = () => {
  ReactDOM.render(
      <Catalog
        products={catalogItems}
      />,
      document.querySelector(`#root`)
  );
};

init();
