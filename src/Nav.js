import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

  const navStyle= {
    color: 'white'
  };

  return (
    <nav>
      <h3>Connect</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle}  to="/students">
          <li>Students</li>
        </Link>
        <Link style={navStyle}  to="/login">
          <li>Sign-In</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
