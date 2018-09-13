import React, { Component } from 'react';
import ApiExplorer from '../../components/ApiExplorer/ApiExplorer';
import ProfileInput from '../../components/ProfileInput/ProfileInput';

export default class ApiContainer extends Component {
  render() {
    return (
      <div>
        <ProfileInput/>
        <ApiExplorer/>
      </div>
    );
  }
}
