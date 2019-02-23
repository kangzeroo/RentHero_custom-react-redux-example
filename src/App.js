import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestCounter from './components/TestCounter/TestCounter'

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <TestCounter title='Example Counter' />
          </header>
        </div>
    );
  }
}

export default App;
