import React, { Component } from 'react';
import ApiExplorer from '../../components/ApiExplorer/apiexplorer';
import ProfileInput from '../../components/ProfileInput/profileInput';

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
