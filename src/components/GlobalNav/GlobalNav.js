import React from 'react';
import './GlobalNav.css';

const GlobalNav = () => (
  <nav>
    <h2>Math Magicians</h2>
    <ul>
      <li><a href="/Home">Home</a></li>
      <li>|</li>
      <li><a href="/Calculator">Calculator</a></li>
      <li>|</li>
      <li><a href="/Quotes">Quotes</a></li>
    </ul>
  </nav>
);

export default GlobalNav;
