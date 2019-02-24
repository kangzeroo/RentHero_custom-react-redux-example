import React, { Component } from 'react'
import logo from "../../assets/logo.svg";
import { withRouter } from '../system/CustomReactRouter/index'
import TestCounter from "../TestCounter/TestCounter";

class MainPage extends Component {
	render() {
	  return (
	    <header className="App-header">
	      <img src={logo} className="App-logo" alt="logo" />
	      <TestCounter title="Example Counter" />
	      <br/><br/>
	      <div onClick={() => this.props.history.push('/error')}>GO BACK TO ERROR PAGE</div>
	      <br/><br/>
	      <div onClick={() => this.props.history.back()}>BACK</div>
	    </header>
	  )
	}
}

export default withRouter(MainPage)