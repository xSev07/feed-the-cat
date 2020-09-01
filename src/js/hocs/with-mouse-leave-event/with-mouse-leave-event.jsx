import React, {PureComponent} from "react";
import {EventsMouse} from "../../const";

const withMouseLeaveEvent = (Component) => {
  class MouseLeaveEventHoc extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isMouseLeave: false,
      };

      this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    }

    mouseLeaveHandler(evt) {
      this.setState({isMouseLeave: evt.type === EventsMouse.MOUSE_LEAVE});
    }

    render() {
      return (
        <Component
          isMouseLeave={this.state.isMouseLeave}
          onMouseLeave={this.mouseLeaveHandler}
          {...this.props}
        />
      );
    }
  }

  return MouseLeaveEventHoc;
};

export default withMouseLeaveEvent;
