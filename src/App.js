import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import WindowSizeListener from 'react-window-size-listener';

import styles from './styles/App.scss'

import Header from './containers/Header';
import Footer from './containers/Footer';

import Loadable from 'react-loadable';
import Loading from './containers/Loading';

const LoadableHome = Loadable({
  loader: () => import('./containers/Home'),
  loading: Loading,
});
const LoadableContact = Loadable({
  loader: () => import('./containers/Contact'),
  loading: Loading,
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { height: 0 };
  }

  componentDidMount() {
    window.document.getElementById('loader').style.display = 'none';
  }

  render() {
    return (
      <Router>
        <div className={styles.app}>
          <WindowSizeListener onResize={windowSize => {
            this.setState({ height: windowSize.windowHeight });
          }} />
          <Header />
          <div className={styles.container} style={{ minHeight: this.state.height }}>
            <Route exact path="/" component={LoadableHome}/>
            <Route path="/contact" component={LoadableContact}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
