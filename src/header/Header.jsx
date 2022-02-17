import React from 'react';
import '../header/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <Link className="header__link" to="/">
          <h2 className="header__title">Where in the world?</h2>
        </Link>
        <div className="header__theme-switcher">
          <FontAwesomeIcon icon={faMoon} />
          <span className="header__theme-switcher-text">Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
