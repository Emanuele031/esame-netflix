


import React from 'react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Netflix Logo"
              width="100px"
              height="50px"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

