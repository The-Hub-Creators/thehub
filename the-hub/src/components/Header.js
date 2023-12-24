// src/components/Header/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>The Hub</h1>
      <p>Elevating Ideas, Powering Tomorrow!</p>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
