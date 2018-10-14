import React, { Component } from "react";
import ApiOutput from "./ApiOutput/ApiOutput";
import styles from "./ApiExplorer.css";
import Profile from "./Profile/Profile";
import Stats from "./Stats/Stats";

export default class ApiExplorer extends Component {
  render() {
    return (
      <div className={styles.apiContainer}>
        <div className={styles.apiBox}>
          <Profile {...this.props} />
          <Stats {...this.props} />
        </div>
        <div className={styles.apiOutput}>
          <ApiOutput apiData={this.props.apiData} />
        </div>
      </div>
    );
  }
}
