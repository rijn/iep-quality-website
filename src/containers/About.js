import React, { Component } from 'react';
import styles from '../styles/About.scss';
import { Row, Col } from 'antd';
import SubpageHeader from './SubpageHeader';

class About extends Component {
  render() {
    return (
      <div>
        <SubpageHeader
          title="About Us"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        />
        <div class={styles.sectionB}>
          <Row gutter={16}>
            <Col span={8}>
              <img src={require('../images/about-1.jpg')} alt="about-1" />
              <img src={require('../images/about-2.jpg')} alt="about-2" />
            </Col>
            <Col span={14} offset={2}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default About;
