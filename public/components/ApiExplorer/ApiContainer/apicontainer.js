import React, { Component } from 'react';
import { render } from 'react-dom';
import ProfileApi from '../Profile/Profile';
import StatsApi from '../Stats/Stats';
import styles from './apicontainer.css';
import ApiOutput from '../ApiOutput/ApiOutput';

export default class ApiContainer extends Component {
  render() {
    return (
      <div className={styles.apiContainer}>
        <div className={styles.apiBox}>
          <ProfileApi />
          <StatsApi />
        </div>
        <div className={styles.apiOutput}>
          <ApiOutput />
        </div>
      </div>
    );
  }
}
