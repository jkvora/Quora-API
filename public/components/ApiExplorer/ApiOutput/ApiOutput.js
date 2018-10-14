import React, { Component } from "react";
import ReactJson from "react-json-view";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class ApiOutput extends Component {
  render() {
    const loading = this.props.apiData.loading;
    let apiView = <ReactJson src={this.props.apiData.json} theme="monokai" />;
    if (loading) {
      apiView = <CircularProgress size={50} />;
    }

    return <div>{apiView}</div>;
  }
}
