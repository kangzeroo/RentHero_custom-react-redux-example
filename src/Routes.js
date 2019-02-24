import React, { Fragment } from 'react';
import { Router, Route } from './components/system/CustomReactRouter/index'
import MainPage from './components/MainPage/MainPage'
import ErrorPage from './components/MainPage/ErrorPage'

export default () => {
  return (
	<Router defaultPath='/'>
       <Route path="/" exact component={<MainPage />} />
       <Route path="/error" exact component={<ErrorPage />} />
    </Router>
  )
}