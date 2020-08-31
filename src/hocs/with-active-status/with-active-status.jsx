import React, {PureComponent} from "react";

const withActiveStatus = (Component) => {
  class ActiveStatusHoc extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false,
      };

      this.elementClickHandler = this.elementClickHandler.bind(this);
    }

    elementClickHandler() {
      this.setState((prevState) => {
        return {isActive: !prevState.isActive};
      });
    }

    render() {
      return (
        <Component
          isActive={this.state.isActive}
          onElementClick={this.elementClickHandler}
          {...this.props}
        />
      );
    }
  }

  return ActiveStatusHoc;
};

export default withActiveStatus;
