import React, { Component, Fragment } from 'react';
import uuid from 'uuid'
import PropTypes from "prop-types";
import CustomReactRouterContext from "./CustomReactRouterContext";

export default class CustomReactRouterRoute extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.elementType,
    exact: PropTypes.bool,
  }

  renderOutput = ({ history, time }) => {
    console.log(time)
    console.log(document.location.pathname)
  	if (this.props.exact) {
    		if (document.location.pathname === this.props.path) {
  	  		return this.props.component
  	  	} else {
  	  		return null
  	  	}
  	} else {
  		if (document.location.pathname.indexOf(this.props.path) > -1) {
  	  		return this.props.component
  	  	} else {
  	  		return null
  	  	}
  	}
  }

  render() {
    return (
      <CustomReactRouterContext.Consumer>
        {
          context => {
            return this.renderOutput(context)
          }
        }
      </CustomReactRouterContext.Consumer>
    )
  }
}
