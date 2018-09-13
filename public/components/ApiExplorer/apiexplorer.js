import React, { Component } from 'react';
import { render } from 'react-dom';
import ApiOutput from './ApiOutput/apioutput';
import styles from './apiexplorer.css';
import Profile from './Profile/profile';
import Stats from './Stats/stats';


export default class ApiExplorer extends Component {
  render() {
    return (
      <div className={styles.apiContainer}>
        <div className={styles.apiBox}>
            <Profile/>
            <Stats/>
        </div>
        <div className={styles.apiOutput}>
          <ApiOutput />
        </div>
      </div>
    );
  }
}
