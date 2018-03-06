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
          <p></p>
          <Button>VIEW MORE</Button>
        </div>
      </div>
    );
  }
}

export default Home;
