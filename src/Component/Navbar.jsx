import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Netflix Logo" style={{ width: '100px', height: '55px' }} />
        </a>
        <button
          className="navbar-toggler text-white bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon  text-white"></span>
        </button>
        <div className="collapse navbar-collapse text-white" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold text-light" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-light" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-light" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-light" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-light" href="#">
                My List
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center me-3">
            <i className="bi bi-search icons text-light"></i>
            <div id="kids" className="fw-bold mx-2 text-light">
              KIDS
            </div>
            <i className="bi bi-bell icons text-light mx-3"></i>
            <i className="bi bi-person-circle icons text-light"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
