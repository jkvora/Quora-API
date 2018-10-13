import React, { Component } from "react";
import ReactJson from "react-json-view";

export default class ApiOutput extends Component {
  render() {
    return (
      <div>
        <ReactJson src={this.props.apiJson} theme="monokai" />
      </div>
    );
  }
}
