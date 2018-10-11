import React, { Component } from "react";
import { connect } from "react-redux";
import ApiExplorer from "../../components/ApiExplorer/ApiExplorer";
import ProfileInput from "../../components/ProfileInput/ProfileInput";
import {
  dispatchcounter,
  checkvalidURL,
  fetchProfile,
  fetchStats
} from "./../../actions";

class ApiContainer extends Component {
  handleClick(event) {
    //console.log(event);
    this.props.fetchProfile();
  }

  handleInputChange(event) {
    //console.log(event);
    let bMatchUrl = this.passQuoraProfileMatch(event.target.value);
    if (bMatchUrl != this.props.isValidURL) {
      this.props.checkvalidURL(bMatchUrl);
    }
  }

  passQuoraProfileMatch(text) {
    try {
      let url = new URL(text);
      let urlTree = url.pathname.split("/");
      if (
        (url.hostname === "www.quora.com" || url.hostname === "quora.com") &&
        urlTree.length == 3
      ) {
        if (urlTree[1] === "profile" && urlTree[2] != "") {
          return true;
        }
      }
    } catch (err) {
      return false;
    }
    return false;
  }

  render() {
    return (
      <div>
        <ProfileInput inputChange={this.handleInputChange.bind(this)} />
        <ApiExplorer
          increment={this.handleClick.bind(this)}
          validurl={this.props.isValidURL}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countr: state.counter,
    isValidURL: state.validURL
  };
}

export default connect(
  mapStateToProps,
  {
    fetchProfile,
    fetchStats,
    dispatchcounter,
    checkvalidURL
  }
)(ApiContainer);
