import React, { Component } from 'react';

import styles from '../styles/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.info}>IEP Quality Inc. &copy; 2018</div>
      </footer>
    );
  }
}

export default Footer;
