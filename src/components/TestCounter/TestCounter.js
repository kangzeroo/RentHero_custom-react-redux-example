
import React, { PureComponent } from "react";
import "./TestCounter.css";
import { connect } from "../system/CustomReactRedux/index";
import { incrementCounter } from "../../actions/system_actions/system_actions";

class TestCounter extends PureComponent {
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

export default connect(mapStateToProps, mapActionsToRedux)(
  TestCounter
);
