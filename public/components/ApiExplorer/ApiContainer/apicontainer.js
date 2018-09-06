import React, { Component } from 'react';
import { render } from 'react-dom';
import ProfileApi from '../Profile/profile';
import StatsApi from '../Stats/stats';

export default class ApiContainer extends Component {
  render() {
    return (
      <div>
        <ProfileApi />
        <StatsApi />
      </div>
    );
  }
}
