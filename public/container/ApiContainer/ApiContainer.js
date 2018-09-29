import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiExplorer from '../../components/ApiExplorer/ApiExplorer';
import ProfileInput from '../../components/ProfileInput/ProfileInput';
import { counter } from './../../actions';

class ApiContainer extends Component {
  handleClick(event) {
    //console.log(event);
    this.props.counter();
  }

  handleInputChange(event) {
    //console.log(event);
    let bMatchUrl = this.passQuoraProfileMatch(event.target.value);
    if (bMatchUrl != this.props.isValidURL) {
      this.props.validURL(bMatchUrl);
    }
  }

  passQuoraProfileMatch(text) {
    if (text == 'https://www.quora.com/profile/Jalak-Vora') {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        {this.props.countr}
        <ProfileInput inputChange={this.handleInputChange.bind(this)} />
        <ApiExplorer increment={this.handleClick.bind(this)} />
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
    counter
  }
)(ApiContainer);
