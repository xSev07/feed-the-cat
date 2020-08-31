import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog";
import {products} from "../../test-data/test-data";

it(`Should Catalog render correctly`, () => {
  const tree = renderer
    .create(
        <Catalog
          products={products}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
