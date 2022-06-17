import React from 'react';
import Flights from '../../../images/flights.png';
import '../../main/main.css';
import './product-home.css';

export const ProductHome = () => {
  return (
    <div>
      <header>
        <div className="container ">
          <div className="row">
            <div className="content-size">
              <div>
                <span className="text-uppercase rexim-ota-text on-text">
                  Rexzim OTA
                </span>
                <p className="online-text">Online Travel Portal</p>
                <div className="d-flex flex-wrap align-items-center justify-content-lg-start  admin-browse">
                  <button className="browse-btn ">Browse Frontend</button>
                  <button className="admin-btn">Browse Admin Panel</button>
                  <div>
                    <button className="panel-btn">Browse B2B Panel</button>
                    <button className="download-app-btn">Download Apps</button>
                  </div>
                </div>
              </div>
              <div style={{ marginLeft: '20%' }} className="i-right">
                <img
                  src={Flights}
                  alt=""
                  className="i-img"
                  style={{
                    height: 'auto',
                    width: '100%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
