import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setCategory }) => {
  const categories = [
    "Technology",
    "Business",
    "Health",
    "Science",
    "Sports",
    "Entertainment"
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
  <div className="navbar-left">
    <div className="navbar-logo" onClick={() => setCategory("general")}>
      📰 NewsMag
    </div>
    <div className="hamburger" onClick={() => setMenuOpen(true)}>
      ☰
    </div>
  </div>

  <ul className={`navbar-links ${menuOpen ? 'open' : 'close'}`}>
    {categories.map((cat) => (
      <li key={cat} onClick={() => {
        setCategory(cat.toLowerCase());
        setMenuOpen(false);
      }}>
        {cat}
      </li>
    ))}
  </ul>
</div>

    </nav>
  );
};

export default Navbar;
