import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
      <div className="container">
      <Link to="/">
          <img src="/download.png" alt="Arthmate" />
      </Link>
      </div>
    </header>
  );
}

export default Header;
