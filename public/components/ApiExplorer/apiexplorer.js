import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactJson from 'react-json-view'

export default class ApiExplorer extends Component {
  render() {
    let obj={
      a:3,
      b:4
    }
    return (
      <div>
      
        <ReactJson src={obj} theme="monokai"/>
      </div>
    );
  }
}
