import React from 'react';
import './navbarComp.css';
import './navTest.css';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import Logo from '../../images/1.png';

export const NavbarComp = () => {
  return (
    <nav className="th-nav-st1">
      <nav className="container" style={{ paddingRight: '0' }}>
        <div className="nav-content d-flex align-items-center justify-content-between">
          <div className="navbar">
            <div className="nav-header">
              <div className="nav-logo">
                <a href="#logo">
                  <img src={Logo} width="100px" alt="logo" />
                </a>
              </div>
            </div>

            <input type="checkbox" id="nav-check" />
            <div className="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <div className="nav-links linked-nav-style">
              <button href="#home" className="home-button">
                <Link to="/">
                  <span className="nav-text-size ">Home</span>
                </Link>
              </button>

              <div className="dropdown" style={{ marginLeft: '10px' }}>
                <a className="dropBtn" href="#service">
                  Services
                  <FiChevronDown />
                </a>
                <div className="drop-content">
                  <a href="#commerce">Ecommerce</a>
                  <a href="#aviation">Aviation</a>
                </div>
              </div>
              <a href="#graphics">
                <Link to="/graphics">Graphics</Link>
              </a>
              <div className="dropdown">
                <a className="dropBtn" href="#service">
                  Product <FiChevronDown />
                </a>
                <div className="drop-content">
                  <Link to="/products">Rexzim OTA</Link>

                  <a href="#aviation">Ecommerce</a>
                  <a href="#aviation">Shohoz POS</a>
                </div>
              </div>
              <a href="#about">
                <Link to="/about">About Us</Link>
              </a>
              <a href="#support">
                <Link to="#">Support</Link>
              </a>
              <button className="home-button">
                <Link to="/login">
                  <FaRegUser className="login-icon-style" />{' '}
                  <span className="nav-text-size ">Login</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </nav>
  );
};
