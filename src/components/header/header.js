import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className="main-nav d-flex">
      <h2 className="header">Math Magicians</h2>
      <ul className="nav-links d-flex j-center a-center">
        <li>
          <Link to="/" className="nav-link" data-testid="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/calculator" className="nav-link" data-testid="calculator">
            Calculator
          </Link>
        </li>
        <li>
          <Link to="/quotes" className="nav-link" data-testid="quote">
            Quote
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
