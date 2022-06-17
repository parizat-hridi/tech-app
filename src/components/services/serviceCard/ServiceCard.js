import React from 'react';
import GraphicDesigner from '../../../images/graphic-designer.png';
import Thousands from '../../../images/thousands.png';
import LogoDesign from '../../../images/logo-design.png';
import Computing from '../../../images/computing.png';
import Complete from '../../../images/Complete-Visibility.png';
import './service-card.css';

export const ServiceCard = () => {
  return (
    <div className="se-vi ">
      <div className="container">
        <div className="row child-mb-2  py-80">
          <div
            className="col-xl-4 col-md-6 col-12 "
            style={{ marginTop: '7%' }}
          >
            <div
              className="card"
              style={{
                width: '20rem',
                boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.34)',
                transition: '0.3s',
              }}
            >
              <div className="service-card-head">
                <div>
                  <h3 className="print-text text-center">Print Templates</h3>
                  <p
                    className="text-center"
                    style={{ lineHeight: 'normal', padding: '4% 2% 0 2%' }}
                  >
                    Thousands of Stationery & Design
                  </p>
                </div>
              </div>
              <img src={Thousands} alt="" style={{ height: '26vh' }} />
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 col-12n"
            style={{ marginTop: '7%' }}
          >
            <div
              className="card"
              style={{
                width: '20rem',
                boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.34)',
                transition: '0.3s',
              }}
            >
              <div className="service-card-head">
                <div>
                  <h3 className="print-text text-center">Graphics</h3>
                  <p
                    className="text-center"
                    style={{ lineHeight: 'normal', padding: '4% 2% 0 2%' }}
                  >
                    Wonderful selection of Graphics & Vectors
                  </p>
                </div>
              </div>
              <img src={GraphicDesigner} alt="" style={{ height: '24vh' }} />
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12" style={{ marginTop: '7%' }}>
            <div
              className="card"
              style={{
                width: '20rem',
                boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.34)',
                transition: '0.3s',
              }}
            >
              <div className="service-card-head">
                <div>
                  <h3 className="print-text text-center top-card-margin">
                    Logo Templates
                  </h3>
                  <p
                    className="text-center"
                    style={{ lineHeight: 'normal', padding: '4% 2% 0 2%' }}
                  >
                    Stand out with custom logo
                  </p>
                </div>
              </div>
              <img src={LogoDesign} alt="" style={{ height: '26vh' }} />
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12" style={{ marginTop: '7%' }}>
            <div
              className="card"
              style={{
                width: '20rem',
                boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.34)',
                transition: '0.3s',
              }}
            >
              <div className="service-card-head">
                <div>
                  <h3 className="print-text text-center">Vectors</h3>
                  <p
                    className="text-center"
                    style={{ lineHeight: 'normal', padding: '4% 2% 0 2%' }}
                  >
                    Vector graphics complete project
                  </p>
                </div>
              </div>
              <img src={Thousands} alt="" style={{ height: '26vh' }} />
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12" style={{ marginTop: '7%' }}>
            <div
              className="card"
              style={{
                width: '20rem',
                boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.34)',
                transition: '0.3s',
              }}
            >
              <div className="service-card-head">
                <div>
                  <h3 className="print-text text-center">UI Design</h3>
                  <p
                    className="text-center"
                    style={{ lineHeight: 'normal', padding: '4% 2% 0 2%' }}
                  >
                    Wonderful selection of Graphics & Vectors
                  </p>
                </div>
              </div>
              <img src={GraphicDesigner} alt="" style={{ height: '24vh' }} />
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12" style={{ marginTop: '7%' }}>
            <div
              className="card"
              style={{
                width: '20rem',
                boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.34)',
                transition: '0.3s',
              }}
            >
              <div className="service-card-head">
                <div>
                  <h3 className="print-text text-center">UX</h3>
                  <p
                    className="text-center"
                    style={{ lineHeight: 'normal', padding: '4% 2% 0 2%' }}
                  >
                    Stand out with custom logo
                  </p>
                </div>
              </div>
              <img src={LogoDesign} alt="" style={{ height: '26vh' }} />
            </div>
          </div>
        </div>
        <div className="center-content">
          <button className="button-view-all-style text-center">
            View all categories
          </button>
        </div>
        <div className="section-head">
          <h5 className="mb-0 meet-text">Explore Our Work</h5>
          <p className="mb-0 mx-auto my-3">Graphic & Vectors</p>
        </div>
        <div className="buttons">
          <button className="button-style">Business Card</button>
          <button className="web-button web-style">Logo Design</button>
          <button className="web-button print-button"> Print Templets</button>
        </div>
        <div className="row child-mb-2  py-80">
          <div className="col-xl-4 col-md-6 col-12" style={{ marginTop: '7%' }}>
            <div
              className="card"
              style={{
                width: '20rem',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                transition: '0.3s',
              }}
            >
              <div className="business-card-head">
                <div>
                  <h3 className="business-text text-center">Business Card</h3>
                  <p className="text-center corporate-text">
                    Corporate Business Card
                  </p>
                </div>
              </div>
              <img className="card-img-top" src={Complete} alt="" />
              <div className="total-sell-text">
                <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                  <div>
                    <p className="total-sell">
                      ৳2,000
                      <br />
                      <span className="sales-text">25 Sales</span>
                    </p>
                  </div>
                  <button href="#domain" className="cart-style">
                    <i className="fa fa-shopping-cart fa-lg "></i>
                  </button>
                  <button className="preview-style">Live preview</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 col-12 top-card-margin"
            style={{ marginTop: '7%' }}
          >
            <div
              className="card "
              style={{
                width: '20rem',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                transition: '0.3s',
              }}
            >
              <div className="business-card-head">
                <div>
                  <h3 className="business-text text-center">Business Card</h3>
                  <p className="text-center corporate-text">
                    Corporate Business Card
                  </p>
                </div>
              </div>
              <img className="card-img-top" src={Complete} alt="" />
              <div className="total-sell-text">
                <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                  <div>
                    <p className="total-sell">
                      ৳2,000
                      <br />
                      <span className="sales-text">25 Sales</span>
                    </p>
                  </div>
                  <button href="#domain" className="cart-style">
                    <i className="fa fa-shopping-cart fa-lg "></i>
                  </button>
                  <button className="preview-style">Live preview</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 col-12 top-card-margin"
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
              <div className="business-card-head">
                <div>
                  <h3 className="business-text text-center">Business Card</h3>
                  <p className="text-center corporate-text">
                    Corporate Business Card
                  </p>
                </div>
              </div>
              <img className="card-img-top" src={Complete} alt="" />
              <div className="total-sell-text">
                <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                  <div>
                    <p className="total-sell">
                      ৳2,000
                      <br />
                      <span className="sales-text">25 Sales</span>
                    </p>
                  </div>
                  <button href="#domain" className="cart-style">
                    <i className="fa fa-shopping-cart fa-lg "></i>
                  </button>
                  <button className="preview-style">Live preview</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12" style={{ marginTop: '7%' }}>
            <div
              className="card"
              style={{
                width: '20rem',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                transition: '0.3s',
              }}
            >
              <div className="business-card-head">
                <div>
                  <h3 className="business-text text-center">Business Card</h3>
                  <p className="text-center corporate-text">
                    Corporate Business Card
                  </p>
                </div>
              </div>
              <img className="card-img-top" src={Computing} alt="" />
              <div className="total-sell-text">
                <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                  <div>
                    <p className="total-sell">
                      ৳2,000
                      <br />
                      <span className="sales-text">25 Sales</span>
                    </p>
                  </div>
                  <button href="#domain" className="cart-style">
                    <i className="fa fa-shopping-cart fa-lg "></i>
                  </button>
                  <button className="preview-style">Live preview</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12" style={{ marginTop: '7%' }}>
            <div
              className="card"
              style={{
                width: '20rem',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                transition: '0.3s',
              }}
            >
              <div className="business-card-head">
                <div>
                  <h3 className="business-text text-center">Business Card</h3>
                  <p className="text-center corporate-text">
                    Corporate Business Card
                  </p>
                </div>
              </div>
              <img className="card-img-top" src={Computing} alt="" />
              <div className="total-sell-text">
                <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                  <div>
                    <p className="total-sell">
                      ৳2,000
                      <br />
                      <span className="sales-text">25 Sales</span>
                    </p>
                  </div>
                  <button href="#domain" className="cart-style">
                    <i className="fa fa-shopping-cart fa-lg "></i>
                  </button>
                  <button className="preview-style">Live preview</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12" style={{ marginTop: '7%' }}>
            <div
              className="card"
              style={{
                width: '20rem',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                transition: '0.3s',
              }}
            >
              <div className="business-card-head">
                <div>
                  <h3 className="business-text text-center">Business Card</h3>
                  <p className="text-center corporate-text">
                    Corporate Business Card
                  </p>
                </div>
              </div>
              <img className="card-img-top" src={Computing} alt="" />
              <div className="total-sell-text">
                <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                  <div>
                    <p className="total-sell">
                      ৳2,000
                      <br />
                      <span className="sales-text">25 Sales</span>
                    </p>
                  </div>
                  <button href="#domain" className="cart-style">
                    <i className="fa fa-shopping-cart fa-lg "></i>
                  </button>
                  <button className="preview-style">Live preview</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="center-content">
          <button className="view-style">View All</button>
        </div>
      </div>
    </div>
  );
};
