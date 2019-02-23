import React, { PureComponent } from "react";
import "./TestCounter.css";
import CustomReactReduxConnect from "../system/CustomReactRedux/CustomReactReduxConnect";
import { incrementCounter } from "../../actions/system_actions/system_actions";

class TestCounter extends PureComponent {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div id="TestCounter">
        <div
          className="increment-btn"
          onClick={() => this.props.incrementCounter(-1)}
        >
          -
        </div>
        <div className="increment-status">{this.props.count}</div>
        <div
          className="increment-btn"
          onClick={() => this.props.incrementCounter(1)}
        >
          +
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.system.count
  };
};

const mapActionsToRedux = {
  incrementCounter
};

export default CustomReactReduxConnect(mapStateToProps, mapActionsToRedux)(
  TestCounter
);
