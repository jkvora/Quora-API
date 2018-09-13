import React, { Component } from 'react';
import AppBar from './components/AppBar/appBar';
import ApiContainer from './container/ApiContainer/apicontainer';

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
