import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
      {/* nav bar */}
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Review</a>
        <a href="/manage">Manage Enventory</a>
      </nav>
    </div>
  );
};

export default Header;