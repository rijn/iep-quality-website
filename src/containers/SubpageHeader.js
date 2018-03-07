import React, { Component } from 'react';
import styles from '../styles/SubpageHeader.scss';

class SubpageHeader extends Component {
  render() {
    return (
      <div class={styles.container}>
        <h1>{ this.props.title }</h1>
        <p>{ this.props.content }</p>
      </div>
    );
  }
}

export default SubpageHeader;
