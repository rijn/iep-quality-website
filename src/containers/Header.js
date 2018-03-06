import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.scss';
import logo from '../images/logo@2x.gif';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  routes = [
    { link: '/', title: 'Home' },
    { link: '/product', title: 'Our Product' },
    { link: '/about', title: 'About Us' },
    { link: '/contact', title: 'Contact' }
  ]

  render() {
    return (
      <div className={styles.nav}>
        <NavLink to="/"><img alt="logo" src={logo} /></NavLink>

        <div className={styles.menu}>
          {this.routes.map(({ link, title }) => (
            <NavLink
              exact
              activeClassName={styles.linkActive}
              key={link}
              to={link}>
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
};

export default withRouter(props => <Header {...props}/>);
