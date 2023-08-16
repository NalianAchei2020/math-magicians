import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h2>Math Matheticians</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/qoutes">Qoutes</Link>
      </nav>
    </div>
  );
}

export default Header;
