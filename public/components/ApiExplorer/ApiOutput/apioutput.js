import React, { Component } from 'react';
import ReactJson from 'react-json-view';

export default class ApiOutput extends Component {
  render() {
    let obj = {
      a: 3,
      b: 4
    };
    return (
      <div>
        <ReactJson src={obj} theme="monokai" />
      </div>
    );
  }
}
