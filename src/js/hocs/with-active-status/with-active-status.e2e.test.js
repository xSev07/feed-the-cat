import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveStatus from "./with-active-status";

Enzyme.configure({
  adapter: new Adapter(),
});

const Component = () => {
  return (<></>);
};

const WrappedComponent = withActiveStatus(Component);

it(`Should change withActiveStatus work correctly`, () => {
  const element = shallow(
      <WrappedComponent/>
  );

  expect(element.state(`isActive`)).toBe(false);
  element.instance().elementClickHandler();
  expect(element.state(`isActive`)).toBe(true);
});
