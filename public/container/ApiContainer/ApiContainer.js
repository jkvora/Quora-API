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
  constructor() {
    super();
    this.state = {
      profile: ""
    };
  }

  loadProfile(event) {
    //console.log(event);
    this.props.fetchProfile(this.state.profile);
  }

  loadStats(event) {
    this.props.fetchStats(this.state.profile);
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
          this.setState({
            profile: urlTree[2]
          });
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
          profile={this.loadProfile.bind(this)}
          stats={this.loadStats.bind(this)}
          validurl={this.props.isValidURL}
          apiData={this.props.apiData}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countr: state.counter,
    isValidURL: state.validURL,
    apiData: state.apiOutput
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
