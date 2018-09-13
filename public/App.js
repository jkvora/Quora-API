import React, { Component } from 'react';
import AppBar from './components/AppBar/AppBar';
import ApiContainer from './container/ApiContainer/ApiContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <ApiContainer />
      </div>
    );
  }
}
