import React, { Component } from 'react';

import styles from '../styles/Button.scss';

class Button extends Component {
  render() {
    return (
      <div className={styles.button} { ...this.props }>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
