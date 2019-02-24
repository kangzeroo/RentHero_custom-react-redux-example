import React, { Component, Fragment } from 'react'
import { withRouter } from '../system/CustomReactRouter/index'

class ErrorPage extends Component {
	render() {
		return (
			<Fragment>
				<div>ERROR OCCURRED</div>
				<div onClick={() => this.props.history.push('/')}>Click to go back to MainPage</div>
		      <br/><br/>
		      <div onClick={() => this.props.history.back()}>BACK</div>
			</Fragment>
		)
	}
};

export default withRouter(ErrorPage);