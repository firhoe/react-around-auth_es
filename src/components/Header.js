import React from 'react';
import logo from '../images/logo.svg';

function Header() {
    return (
      <header className="header">
        <img src={logo} alt="Logo Around the US" className="header__logo" />
      </header>
    );
}

export default Header;