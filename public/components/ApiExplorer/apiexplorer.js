import React, { Component } from 'react';
import { render } from 'react-dom';
import ApiContainer from './ApiContainer/apicontainer';
import ApiOutput from './ApiOutput/apioutput';

export default class ApiExplorer extends Component {
  render() {
    return (
      <div>
        <ApiContainer />
        <ApiOutput />
      </div>
    );
  }
}
