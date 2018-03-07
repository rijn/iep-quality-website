import React, { Component } from 'react';
import styles from '../styles/Home.scss';
import Button from './Button';

class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.sectionA}>
          <div className={styles.sectionAImage}>
            <img src={require('../images/home-a-1.jpg')} alt="home-a-1" />
          </div>
          <div className={styles.sectionATextContainer}>
            <div className={styles.sectionAText}>
              <h1>IEP Quality Inc.</h1>
              <p>Helping special education professionals improve the</p>
              <p>content of Individualized Education Programs.</p>
            </div>
          </div>
        </div>
        <div className={styles.sectionB}>
          <h1>Our Product</h1>
          <p>Our product is a tutorial that will focus on IEP creation for students with high-incidence disabilities who will participate in the general state achievement testing, with or without accommodations.</p>
          <Button>VIEW MORE</Button>
        </div>
        <div className={styles.sectionC}>
          <div className={styles.sectionCLeft}>
            <h1>About Our Company</h1>
            <p>Our purpose is to create and test a web-based IEP Tutorial and decision-making support system that will be linked to the State of Illinois’ IEP creation software.</p>
            <Button primary>LEARN MORE</Button>
          </div>
          <div className={styles.sectionCRight}>
            <h1>Connect With Us</h1>
            <p>Our purpose is to create and test a web-based IEP Tutorial and decision-making support system that will be linked to the State of Illinois’ IEP creation software.</p>
            <Button primary>CONTACT</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
