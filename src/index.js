import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import CustomReactReduxProvider from './components/system/CustomReactRedux/CustomReactReduxProvider';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

const reduxStore = createStore(rootReducer)

ReactDOM.render(
  <CustomReactReduxProvider store={reduxStore}>
    <App />
  </CustomReactReduxProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
