import React, { Component } from 'react';
import classnames from 'classnames';

import styles from '../styles/Button.scss';

class Button extends Component {
  render() {
    return (
      <div className={classnames(styles.button, { [ styles.primary ]: this.props.primary })} { ...this.props }>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
