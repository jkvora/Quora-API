import React, { Component } from "react";
import { connect } from "react-redux";
import ApiExplorer from "../../components/ApiExplorer/ApiExplorer";
import ProfileInput from "../../components/ProfileInput/ProfileInput";
import { counter } from "./../../actions";

class ApiContainer extends Component {
  handleClick(event) {
    console.log(event);
    this.props.counter();
  }

  render() {
    return (
      <div>
        {this.props.countr}
        <ProfileInput />
        <ApiExplorer increment={this.handleClick.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countr: state.counter
  };
}


export default connect(
  mapStateToProps,
  {
    counter
  }
)(ApiContainer);
