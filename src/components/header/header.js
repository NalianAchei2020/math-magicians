import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <h2>Math Magicians</h2>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/calculator">Calculator</a>
        <a href="/qoutes">Qoutes</a>
      </nav>
    </div>
  );
}

export default Header;
