import React, { useState } from 'react';
import './navbarComp.css';
import './nav.css';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import Logo from '../../images/1.png';
// import { Link } from 'react-router-dom';
// import { NavDropdown } from 'react-bootstrap';

export const NavbarComp = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ['main-menu menu-right menuq1'];
  if (isMenu) {
    boxClass.push('menuq2');
  } else {
    boxClass.push('');
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ['sub__menus'];
  if (isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  } else {
    boxClassSubMenu.push('');
  }

  return (
    // <div>
    //   <nav className="th-nav-st1">
    //     <div className="container">
    //       <div className="nav-content d-flex align-items-center justify-content-between">
    //         <a href="#logo" className="brand">
    //           <img src={Logo} className="img-fluid" alt="" />
    //         </a>
    //         <ul className="nav-links list-unstyled d-lg-flex align-items-center justify-content-end mb-0">
    //           <li className="th-nav-item position-relative">
    //             <a
    //               href="#home"
    //               className="position-relative d-flex align-items-center justify-content-lg-center justify-content-between text-capitalize"
    //             >
    //               <Link to="/">
    //                 <span class="home-button"> home</span>
    //               </Link>
    //             </a>
    //           </li>

    //           <li className="th-nav-item  position-relative">
    //             <a
    //               href="#support"
    //               className="position-relative d-flex align-items-center justify-content-lg-center justify-content-between text-capitalize"
    //               style={{ marginRight: '5px' }}
    //             >
    //               <NavDropdown id="nav-dropdown-dark-example" title="Service">
    //                 <NavDropdown.Item href="#action/3.1">
    //                   E-commerce
    //                 </NavDropdown.Item>
    //                 <NavDropdown.Item href="#action/3.2">
    //                   Aviation
    //                 </NavDropdown.Item>
    //                 <NavDropdown.Item href="#action/3.3">
    //                   Web Development
    //                 </NavDropdown.Item>
    //               </NavDropdown>
    //             </a>
    //           </li>
    //           <li className="th-nav-item position-relative">
    //             <a
    //               href="#graphics"
    //               onclick="return false;"
    //               className="position-relative d-flex align-items-center justify-content-lg-center justify-content-between text-capitalize"
    //             >
    //               <Link
    //                 to="/graphics"
    //                 style={{
    //                   textDecoration: 'none',
    //                   color: 'var(--thBlack)',
    //                 }}
    //               >
    //                 Graphics
    //               </Link>
    //             </a>
    //           </li>

    //           <li className="th-nav-item position-relative">
    //             <a
    //               href="#support"
    //               className="position-relative d-flex align-items-center justify-content-lg-center justify-content-between text-capitalize"
    //             >
    //               <NavDropdown id="nav-dropdown-dark-example" title="Product">
    //                 <NavDropdown.Item href="#action/3.1">
    //                   <Link
    //                     to="/products"
    //                     style={{
    //                       textDecoration: 'none',
    //                       color: 'var(--thBlack)',
    //                     }}
    //                   >
    //                     Rexzim OTA
    //                   </Link>
    //                 </NavDropdown.Item>
    //                 <NavDropdown.Item href="#action/3.2">
    //                   Shohoz POS
    //                 </NavDropdown.Item>
    //                 <NavDropdown.Item href="#action/3.3">
    //                   iRecharge
    //                 </NavDropdown.Item>
    //               </NavDropdown>
    //             </a>
    //           </li>

    //           <li className="th-nav-item position-relative">
    //             <a
    //               href="#about"
    //               className="position-relative d-flex align-items-center justify-content-lg-center justify-content-between text-capitalize"
    //             >
    //               <Link
    //                 to="/about"
    //                 style={{
    //                   textDecoration: 'none',
    //                   color: 'var(--thBlack)',
    //                 }}
    //               >
    //                 About Us
    //               </Link>
    //             </a>
    //           </li>
    //           <li className="th-nav-item position-relative">
    //             <a
    //               href="#support"
    //               className="position-relative d-flex align-items-center justify-content-lg-center justify-content-between text-capitalize"
    //             >
    //               support
    //             </a>
    //           </li>
    //           <li className="th-nav-item user-item position-relative">
    //             <a
    //               href="#login"
    //               className="position-relative d-flex align-items-center justify-content-lg-center justify-content-between text-capitalize"
    //             >
    //               <i className="fa fa-user-o mr-2 d-lg-inline-flex d-none login-icon-style"></i>
    //               <span className="d-inline-flex text-capitalize">
    //                 <Link
    //                   to="/login"
    //                   style={{ textDecoration: 'none', color: 'white' }}
    //                 >
    //                   Login
    //                 </Link>
    //               </span>
    //             </a>
    //           </li>
    //         </ul>
    //         <button
    //           className="nav-toggler position-relative d-lg-none d-block"
    //           id="nav_toggler"
    //         >
    //           <span className="d-block w-100"></span>
    //           <span className="d-block w-100"></span>
    //           <span className="d-block w-100"></span>
    //         </button>
    //       </div>
    //     </div>
    //   </nav>
    // </div>

    <nav className="th-nav-st1">
      <div className="container">
        <div className="headerOne header__middle">
          <div className="containers">
            <div className="nav-content d-flex align-items-center justify-content-between">
              {/* Add Logo  */}
              <div className="header__middle__logo">
                <NavLink exact activeClassName="is-active" to="/">
                  <img src={Logo} alt="logo" />
                </NavLink>
              </div>

              <div className="header__middle__menus">
                <nav className="main-nav ">
                  {/* Responsive Menu Button */}
                  {isResponsiveclose === true ? (
                    <>
                      <span
                        className="menubar__button"
                        style={{ display: 'none' }}
                        onClick={toggleClass}
                      >
                        {' '}
                        <FiXCircle />{' '}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className="menubar__button"
                        style={{ display: 'none' }}
                        onClick={toggleClass}
                      >
                        {' '}
                        <FiAlignRight />{' '}
                      </span>
                    </>
                  )}

                  <ul
                    className={boxClass.join(' ')}
                    class="nav-links list-unstyled d-lg-flex align-items-center justify-content-end mb-0"
                  >
                    <li className="menu-item">
                      <NavLink
                        exact
                        activeClassName="is-active"
                        onClick={toggleClass}
                        to={`/`}
                      >
                        <span className="nav-text-size home-button">Home</span>
                      </NavLink>
                    </li>
                    <li
                      onClick={toggleSubmenu}
                      className="menu-item sub__menus__arrows"
                    >
                      {' '}
                      <Link to="#">
                        <span className="nav-text-size">Service</span>
                        <FiChevronDown className="down" />{' '}
                      </Link>
                      <ul className={boxClassSubMenu.join(' ')}>
                        <li>
                          {' '}
                          <NavLink
                            onClick={toggleClass}
                            activeClassName="is-active"
                            to="#"
                          >
                            E-commerce
                          </NavLink>{' '}
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleClass}
                            activeClassName="is-active"
                            to="#"
                          >
                            Aviation
                          </NavLink>{' '}
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item ">
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to="/graphics"
                      >
                        <span className="nav-text-size">Graphics</span>
                      </NavLink>{' '}
                    </li>
                    <li
                      onClick={toggleSubmenu}
                      className="menu-item sub__menus__arrows"
                    >
                      {' '}
                      <Link to="#">
                        <span className="nav-text-size">Product</span>{' '}
                        <FiChevronDown className="down" />{' '}
                      </Link>
                      <ul className={boxClassSubMenu.join(' ')}>
                        <li>
                          {' '}
                          <NavLink
                            onClick={toggleClass}
                            activeClassName="is-active"
                            to={`/products`}
                          >
                            Rexzim OTA
                          </NavLink>{' '}
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleClass}
                            activeClassName="is-active"
                            to="#"
                          >
                            E-commerce
                          </NavLink>{' '}
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleClass}
                            activeClassName="is-active"
                            to="#"
                          >
                            Shohoz POS
                          </NavLink>{' '}
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item ">
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to="/about"
                      >
                        <span className="nav-text-size">About Us</span>
                      </NavLink>{' '}
                    </li>
                    <li className="menu-item ">
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to="#"
                      >
                        <span className="nav-text-size">Support</span>
                      </NavLink>{' '}
                    </li>
                    <li className="menu-item ">
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to="login"
                      >
                        <span className="home-button">
                          <FaRegUser className="login-icon-style" />
                          <span className="nav-text-size home">Login</span>
                        </span>
                      </NavLink>{' '}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
