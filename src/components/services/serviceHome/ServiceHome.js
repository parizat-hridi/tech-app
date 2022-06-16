import React from 'react';
import Service from '../../../images/service.png';
import './service.css';

export const ServiceHome = () => {
  return (
    <div>
      <div>
        <header>
          <div className="container ">
            <div className="row">
              <div className="content-size">
                <div>
                  <span className="text-uppercase discover-text">
                    Discover 7,528 fonts, logos & presentations from $2
                  </span>

                  <p className="mb-5 dream-text mt-4">
                    Rexzimtech,has a global reputation for up to scratch
                    customer experience which marks us as one of the best
                    software development companies in the world.
                  </p>
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
                    <a
                      href="#domain"
                      className="th-btn th-btn-outline-primary mx-2 my-2 "
                      style={{
                        borderRadius: '20px',
                        border: '1px solid black',
                      }}
                    >
                      <span className="margin-domain domains">
                        Browse graphics
                      </span>
                    </a>
                    <a
                      href="#pricing"
                      className="th-btn th-btn-fill-primary mx-2 my-1"
                      style={{
                        borderRadius: '20px',
                        backgroundColor: '#030085',
                        fontWeight: '700',
                      }}
                    >
                      <span className="search-text"> Search</span>
                    </a>
                  </div>
                </div>
                <div
                  className="i-right"
                  style={{ marginLeft: '25%', width: '90%' }}
                >
                  <img src={Service} alt="" className="i-img" />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
