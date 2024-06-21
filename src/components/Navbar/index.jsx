import React from 'react';

import './styles.css';
import Logo from '../../assets/images/weather.svg';
import Search from '../Search';

const Navbar = ({ searchPlaceholder, onTextChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <div className="navbar__logo-container">
          <img className="navbar__logo" src={Logo} alt="logo" />
        </div>
        <p className="navbar__brand-text">Clima</p>
      </div>
      <div className="navbar__search">
        <Search type="text" placeholder={searchPlaceholder} onTextChange={onTextChange} />
      </div>
    </nav>
  );
};

export default Navbar;
