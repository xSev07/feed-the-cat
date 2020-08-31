import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withMouseLeaveEvent from "./with-mouse-leave-event";

Enzyme.configure({
  adapter: new Adapter(),
});

const Component = () => {
  return (<></>);
};

const WrappedComponent = withMouseLeaveEvent(Component);

it(`Should check withMouseLeaveEvent work correctly`, () => {
  const element = shallow(
      <WrappedComponent/>
  );

  expect(element.state(`isMouseLeave`)).toBe(false);
  element.instance().mouseLeaveHandler({type: `mousemove`});
  expect(element.state(`isMouseLeave`)).toBe(false);
  element.instance().mouseLeaveHandler({type: `mouseleave`});
  expect(element.state(`isMouseLeave`)).toBe(true);
  element.instance().mouseLeaveHandler({type: `mouseenter`});
  expect(element.state(`isMouseLeave`)).toBe(false);
});
