import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="../public/Images/logo.png" alt="Logo" />
      </div>
      <div className="tabs">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
