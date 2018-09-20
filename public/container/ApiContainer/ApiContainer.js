import React, { Component } from "react";
import { connect } from "react-redux";
import ApiExplorer from "../../components/ApiExplorer/ApiExplorer";
import ProfileInput from "../../components/ProfileInput/ProfileInput";

class ApiContainer extends Component {
  render() {
    return (
      <div>
        {this.props.countr}
        <ProfileInput />
        <ApiExplorer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countr: state.counter
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiContainer);
