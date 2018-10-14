import React, { Component } from "react";
import ReactJson from "react-json-view";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class ApiOutput extends Component {
  render() {
    return (
      <div>
        <CircularProgress size={50} />
        <ReactJson src={this.props.apiData.json} theme="monokai" />
      </div>
    );
  }
}
