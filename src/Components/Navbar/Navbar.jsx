import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  return (
    <div className="navbar">
      <div className="nav-log">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {/* Use Link component instead of incorrect link */}
        <li onClick={() => setMenu('shop')}>
          <Link to="/">Shop</Link>
          {menu === 'shop' ? <h /> : <></>}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link to="/mens">Men</Link>
          {menu === 'mens' ? <h /> : <></>}
        </li>
        <li onClick={() => setMenu('womens')}>
          <Link to="/womens">Women</Link>
          {menu === 'womens' ? <h /> : <></>}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link to="/kids">Kids</Link>
          {menu === 'kids' ? <h /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {/* Use Link component for the cart link */}
        <Link to="/cart">
          <button>Login</button>
        </Link>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
