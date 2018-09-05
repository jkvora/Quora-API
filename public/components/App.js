import React, { Component } from 'react';
import { render } from 'react-dom';

import AppBar from './AppBar/appBar';
import ProfileInput from './ProfileInput/profileInput';
import ApiExplorer from './ApiExplorer/apiexplorer';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <ProfileInput />
        <ApiExplorer />
      </div>
    );
  }
}
