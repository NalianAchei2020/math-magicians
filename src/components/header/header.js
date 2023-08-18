import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div>
      <h2>Math Magicians</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/qoutes">Quote</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
