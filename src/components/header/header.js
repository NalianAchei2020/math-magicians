import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <h2>Math Matheticians</h2>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/calculator">Calculator</a>
        <a href="/qoute">Qoutes</a>
      </nav>
    </div>
  );
}

export default Header;
