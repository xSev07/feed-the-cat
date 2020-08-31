import React from "react";
import renderer from "react-test-renderer";
import {Product} from "./product";
import {products} from "../../test-data/test-data";


describe(`Should Product render correctly`, () => {
  it(`Should render default card`, () => {
    const tree = renderer
      .create(
          <Product
            product={products[0]}
            isActive={false}
            isMouseLeave={false}
            onElementClick={() => {}}
            onMouseLeave={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render active card`, () => {
    const tree = renderer
      .create(
          <Product
            product={products[1]}
            isActive={true}
            isMouseLeave={false}
            onElementClick={() => {}}
            onMouseLeave={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render disabled card`, () => {
    const tree = renderer
      .create(
          <Product
            product={products[2]}
            isActive={false}
            isMouseLeave={false}
            onElementClick={() => {}}
            onMouseLeave={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render card with question`, () => {
    const tree = renderer
      .create(
          <Product
            product={products[1]}
            isActive={true}
            isMouseLeave={true}
            onElementClick={() => {}}
            onMouseLeave={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
