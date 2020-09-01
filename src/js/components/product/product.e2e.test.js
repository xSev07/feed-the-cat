import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Product} from "./product";
import {products} from "../../test-data/test-data";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Should check actions in Product`, () => {
  it(`Should check click actions`, () => {
    const onElementClick = jest.fn();
    const onMouseLeave = jest.fn();

    const product = shallow(
        <Product
          product={products[0]}
          isActive={false}
          isMouseLeave={false}
          onElementClick={onElementClick}
          onMouseLeave={onMouseLeave}
        />
    );

    product.find(`.catalog__content`).simulate(`click`, {preventDefault: () => {}});
    product.find(`.catalog__buy`).simulate(`click`, {preventDefault: () => {}});

    expect(onElementClick).toHaveBeenCalledTimes(2);
  });

  it(`Should check no click actions in disabled component`, () => {
    const onElementClick = jest.fn();
    const onMouseLeave = jest.fn();

    const product = shallow(
        <Product
          product={products[2]}
          isActive={false}
          isMouseLeave={false}
          onElementClick={onElementClick}
          onMouseLeave={onMouseLeave}
        />
    );

    product.find(`.catalog__content`).simulate(`click`, {preventDefault: () => {}});

    expect(onElementClick).toHaveBeenCalledTimes(0);
  });

  it(`Should check mouse move actions with active element`, () => {
    const onElementClick = jest.fn();
    const onMouseLeave = jest.fn();

    const product = shallow(
        <Product
          product={products[0]}
          isActive={true}
          isMouseLeave={false}
          onElementClick={onElementClick}
          onMouseLeave={onMouseLeave}
        />
    );

    const content = product.find(`.catalog__content`);
    content.simulate(`mouseleave`);
    content.simulate(`mouseenter`);

    expect(onMouseLeave).toHaveBeenCalledTimes(2);
  });

  it(`Should check mouse move actions with inactive element`, () => {
    const onElementClick = jest.fn();
    const onMouseLeave = jest.fn();

    const product = shallow(
        <Product
          product={products[0]}
          isActive={false}
          isMouseLeave={false}
          onElementClick={onElementClick}
          onMouseLeave={onMouseLeave}
        />
    );

    const content = product.find(`.catalog__content`);
    content.simulate(`mouseleave`);
    content.simulate(`mouseenter`);

    expect(onMouseLeave).toHaveBeenCalledTimes(0);
  });
});
