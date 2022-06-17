import React from 'react';
import './main.css';
import './main-responsive.css';
import Cloud from '../../images/cloud_native.png';

export const Main = () => {
  return (
    <div>
      <header>
        <div className="container ">
          <div className="row">
            <div className="content-size">
              <div className="margin-content">
                <span className="text-uppercase best-text">
                  Best Software Development Company&nbsp;
                </span>
                <span className="dream-text">
                  To Architect The Dream <br />
                  For &nbsp;
                  <span className="generation-text">Next Generation</span>
                </span>
                <p className="mb-5 dream-text mt-4">
                  Rexzimtech,has a global reputation for up to scratch customer
                  <br />
                  experience which marks us as one of the best software
                  <br />
                  development companies in the world.
                </p>
                <div className=" d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                  <a
                    href="#domain"
                    className="th-btn th-btn-outline-primary mx-2 my-2 res-border"
                    style={{ borderRadius: '20px' }}
                  >
                    <i className="fa fa-search fa-lg find-icon "></i>
                    <span className="margin-domain find-domain domains">
                      Find Your Domain
                    </span>
                  </a>
                  <a
                    href="#pricing"
                    className="th-btn th-btn-fill-primary mx-2 my-1"
                    style={{
                      borderRadius: '20px',
                      backgroundColor: '#590BB2',
                    }}
                  >
                    <span className="search-text"> Search</span>
                  </a>
                </div>
              </div>
              <div className="i-right">
                <img
                  src={Cloud}
                  alt=""
                  className="i-img"
                  style={{ height: 'auto', width: '100%' }}
                />
              </div>
              {/* <div className="i-right responsive-img">
                <img
                  src={Cloud}
                  alt=""
                  className="i-img i-responsive-img"
                  style={{ height: 'auto', width: '350px' }}
                />
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
