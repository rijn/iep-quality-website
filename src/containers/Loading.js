import React, { Component } from 'react';
import styles from '../styles/Loading.scss';

class Loading extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <div className={styles.loaderSpinner}></div>
      </div>
    );
  }
}

export default Loading;
