import React from 'react';
import '../main/main.css';
import '../navbar/navbarComp.css';
import SoftDev from '../../images/soft_dev.png';
import MobileApp from '../../images/mobile_app.png';
import SEO from '../../images/seo.png';
import WebDev from '../../images/web_dev.png';
import Ecommerce from '../../images/e-commerce.png';

export const MainTwo = () => {
  return (
    <div className="se-i py-80">
      <div className="container">
        <div className="section-head">
          <h2 className="my-3 share-text">
            Share Your Demand to Design Any Customized Software
          </h2>
          <p className="mb-0 mx-auto">
            Rexzimtech. focuses on the exact requirements of the clients. We
            design and develop the best and most advanced software for all types
            of businesses..
          </p>
        </div>
        <div className="row">
          <h3 className="text-center mb-5 col-md-4 offset-md-4 p-2 rexzim-featcher">
            Rexzim Tech Features
            <p className="border-all"></p>
          </h3>
        </div>
        <div className="row child-mb-2">
          <div className="col-xl-4 col-md-6 col-12">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={SoftDev}
                  className="img-fluid mb-4 align-items-center"
                  alt=""
                />
              </div>
              <h5 className="mb-md-5 mb-4 text-center">
                Software Development{' '}
              </h5>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={WebDev}
                  className="img-fluid mb-4 align-items-center"
                  alt=""
                />
              </div>
              <h5 className="mb-md-5 mb-4 text-center">Website Development </h5>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={MobileApp}
                  className="img-fluid mb-4 align-items-center"
                  alt=""
                />
              </div>
              <h5 className="mb-md-5 mb-4 text-center">
                Mobile App Development{' '}
              </h5>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={Ecommerce}
                  className="img-fluid mb-4 align-items-center"
                  alt=""
                />
              </div>
              <h5 className="mb-md-5 mb-4 text-center">Ecommerce </h5>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={MobileApp}
                  className="img-fluid mb-4 align-items-center"
                  alt=""
                />
              </div>
              <h5 className="mb-md-5 mb-4 text-center">
                Customer Software Development
              </h5>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={SEO}
                  className="img-fluid mb-4 align-items-center"
                  alt=""
                />
              </div>
              <h5 className="mb-md-5 mb-4 text-center">SEO</h5>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={MobileApp}
                  className="img-fluid mb-4 align-items-center"
                  alt=""
                />
              </div>
              <h5 className="mb-md-5 mb-4 text-center">Graphic Design</h5>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={MobileApp}
                  className="img-fluid mb-4 align-items-center"
                  alt=""
                />
              </div>
              <h5 className="mb-md-5 mb-4 text-center">UI/UX Design</h5>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={MobileApp}
                  className="img-fluid mb-4 align-items-center"
                  alt=""
                />
              </div>
              <h5 className="mb-md-5 mb-4 text-center">Online Marketing</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
