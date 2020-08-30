import './assets/css/main.css';
import './assets/scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Catalog from "./components/catalog/catalog.jsx";

const init = () => {
  ReactDOM.render(
      <Catalog/>,
      document.querySelector(`#root`)
  );
};

init();
