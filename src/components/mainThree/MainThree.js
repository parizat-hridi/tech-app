import React from 'react';
import '../main/main.css';
import '../navbar/navbarComp.css';
import './main-three.css';
import CloudNative from '../../images/cloud_native.png';
import Aviation from '../../images/aviation.png';
import CompleteVisibilty from '../../images/Complete-Visibility.png';
import DataSecurity from '../../images/data.png';
import DataCenter from '../../images/center.png';
import Rectangle from '../../images/rectangle.png';
import { Link } from 'react-router-dom';

export const MainThree = () => {
  return (
    <div>
      <div className="se-vi ">
        <div className="container">
          <div className="section-head">
            <h5 className="mb-0 meet-text">Explore Our Work</h5>
            <p className="mb-0 mx-auto my-3">
              We are proud to work with truly innovative clients and the
              products we truly believe in. Here are just a few of the projects
              we've had the privilege to work
            </p>
          </div>
          <div className="buttons">
            <button className="button-style">Software Build</button>
            <button className="web-button web-style">Web Design</button>
            <button className="web-button"> Graphic Design</button>
          </div>
          <div className="row child-mb-2  py-80">
            <div
              className="col-xl-4 col-md-6 col-12"
              style={{ marginTop: '7%' }}
            >
              <div
                className="card"
                style={{
                  width: '20rem',
                  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                  transition: '0.3s',
                }}
              >
                <div className="card-head">
                  <div className="card-head">
                    <img
                      src={Aviation}
                      alt=""
                      style={{
                        width: '4rem',
                        height: '4rem',
                        marginTop: '10px',
                        marginRight: '20px',
                        marginLeft: '15px',
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="ota-text">OTA</h3>
                    <p className="flight-text">Flight Booking Software</p>
                  </div>
                </div>
                <img className="card-img-top" src={CloudNative} alt="" />
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                    <button href="#domain" className="cart-style">
                      <i className="fa fa-shopping-cart fa-lg "></i>
                    </button>
                    <button className="preview-style">
                      <Link
                        to="/products"
                        style={{ textDecoration: 'none', color: '#030085' }}
                      >
                        Live Preview
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-12"
              style={{ marginTop: '7%' }}
            >
              <div
                className="card"
                style={{
                  width: '20rem',
                  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                  transition: '0.3s',
                }}
              >
                <div className="card-head-two">
                  <div className="card-head-two">
                    <img
                      src={Aviation}
                      alt=""
                      style={{
                        width: '4rem',
                        height: '4rem',
                        marginTop: '10px',
                        marginRight: '20px',
                        marginLeft: '15px',
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="pos-text">POS</h3>
                    <p className="point-text">point of sale software</p>
                  </div>
                </div>
                <img className="card-img-top" src={CompleteVisibilty} alt="" />
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                    <button href="#domain" className="cart-style">
                      <i className="fa fa-shopping-cart fa-lg "></i>
                    </button>
                    <button className="preview-style">
                      <Link
                        to="/products"
                        style={{ textDecoration: 'none', color: '#030085' }}
                      >
                        Live Preview
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-12"
              style={{ marginTop: '7%' }}
            >
              <div
                className="card"
                style={{
                  width: '20rem',
                  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                  transition: '0.3s',
                }}
              >
                <div className="card-head-three">
                  <div className="card-head-three">
                    <img
                      src={Aviation}
                      alt=""
                      style={{
                        width: '4rem',
                        height: '4rem',
                        marginTop: '10px',
                        marginRight: '20px',
                        marginLeft: '15px',
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="e-text">E-Commerce</h3>
                    <p className="commerce-text">E-Commerce Solutions</p>
                  </div>
                </div>
                <img className="card-img-top" src={CloudNative} alt="" />
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                    <button href="#domain" className="cart-style">
                      <i className="fa fa-shopping-cart fa-lg "></i>
                    </button>
                    <button className="preview-style">
                      <Link
                        to="/products"
                        style={{ textDecoration: 'none', color: '#030085' }}
                      >
                        Live Preview
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-12"
              style={{ marginTop: '7%' }}
            >
              <div
                className="card"
                style={{
                  width: '20rem',
                  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                  transition: '0.3s',
                }}
              >
                <div className="card-head-four">
                  <div className="card-head-four">
                    <img
                      src={Aviation}
                      alt=""
                      style={{
                        width: '4rem',
                        height: '4rem',
                        marginTop: '10px',
                        marginRight: '20px',
                        marginLeft: '15px',
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="ir-text">iRecgarge</h3>
                    <p className="mobile-text">Mobile recharge Software</p>
                  </div>
                </div>
                <img className="card-img-top" src={DataSecurity} alt="" />
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                    <button href="#domain" className="cart-style">
                      <i className="fa fa-shopping-cart fa-lg "></i>
                    </button>
                    <button className="preview-style">
                      <Link
                        to="/products"
                        style={{ textDecoration: 'none', color: '#030085' }}
                      >
                        Live Preview
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-12"
              style={{ marginTop: '7%' }}
            >
              <div
                className="card"
                style={{
                  width: '20rem',
                  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                  transition: '0.3s',
                }}
              >
                <div className="card-head-five">
                  <div className="card-head-five">
                    <img
                      src={Aviation}
                      alt=""
                      style={{
                        width: '4rem',
                        height: '4rem',
                        marginTop: '10px',
                        marginRight: '20px',
                        marginLeft: '15px',
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="crm-text">CRM</h3>
                    <p className="cust-text">Customer relationship </p>
                  </div>
                </div>
                <img className="card-img-top" src={DataCenter} alt="" />
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                    <button href="#domain" className="cart-style">
                      <i className="fa fa-shopping-cart fa-lg "></i>
                    </button>
                    <button className="preview-style">
                      <Link
                        to="/products"
                        style={{ textDecoration: 'none', color: '#030085' }}
                      >
                        Live Preview
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-12"
              style={{ marginTop: '7%' }}
            >
              <div
                className="card"
                style={{
                  width: '20rem',
                  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                  transition: '0.3s',
                }}
              >
                <div className="card-head-six">
                  <div className="card-head-six">
                    <img
                      src={Aviation}
                      alt=""
                      style={{
                        width: '4rem',
                        height: '4rem',
                        marginTop: '10px',
                        marginRight: '20px',
                        marginLeft: '15px',
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="pay-text">iPay</h3>
                    <p className="payment-text">payment gateway Soft</p>
                  </div>
                </div>
                <img className="card-img-top" src={Rectangle} alt="" />
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                    <button href="#domain" className="cart-style">
                      <i className="fa fa-shopping-cart fa-lg "></i>
                    </button>
                    <button className="preview-style">
                      <Link
                        to="/products"
                        style={{ textDecoration: 'none', color: '#030085' }}
                      >
                        Live Preview
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-content">
            <button className="button-view-style">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
};
