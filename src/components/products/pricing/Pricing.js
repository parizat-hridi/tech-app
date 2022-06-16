import React from 'react';
import Paypal from '../../../images/paypal.png';
import Bkash from '../../../images/bkash.png';
import Stripe from '../../../images/stripe.png';
import Paystack from '../../../images/paystack.png';
import Payoneer from '../../../images/payoneer.png';

export const Pricing = () => {
  return (
    <div className="se-i">
      <div className="container">
        <div className="section-head">
          <h3 className="text-center col-md-4 offset-md-4 pricing-text">
            Pricing
            <p className="border-all"></p>
          </h3>
        </div>
        <div className="content">
          <ul className="table-body list-unstyled d-lg-flex d-block align-items-center justify-content-center p-0 mb-0">
            <li className="card-1 " style={{ marginRight: '7%' }}>
              <div className="card-name ">
                <h3
                  className="text-capitalize iata-package"
                  style={{
                    color: ' #faff00',
                    fontSize: '25px',
                    marginBottom: '0',
                  }}
                >
                  IATA Package
                </h3>
                <h3
                  className="text-capitalize bdt-text"
                  style={{
                    backgroundColor: '#0030AB',
                    fontSize: '25px',
                    color: 'white',
                  }}
                >
                  2,00,000 BDT
                </h3>
              </div>
              <div className="card-features text-lg-left">
                <div
                  style={{
                    color: 'black',
                    marginTop: '40px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    Flight + Hotel + Tour DMC + Visa Booking Engine
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Your GDS API (Sabre/Amadeus/Travelport or Galileo)
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Price markup and admin dashboard
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Web hosting support
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Coupon Code Features
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Multi Vendor Feature (B2C + B2B)
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Convenience Fee Features
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    Free Web Installation
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint"> Your Flight API</b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    100% Open source Without Source Code
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    Multi language + Multi Currencies
                  </b>
                </div>
                <var>
                  <div
                    style={{
                      color: 'black',
                      marginTop: '10px',
                      marginLeft: '20px',
                    }}
                  >
                    <i
                      className="fa fa-check"
                      style={{ color: '#91dc5a', marginRight: '10px' }}
                    ></i>
                    <b className="text-capitalize checkpoint">
                      {' '}
                      Payment Gateway Integration
                    </b>
                  </div>
                  <div
                    style={{
                      color: 'black',
                      marginTop: '10px',
                      marginLeft: '20px',
                    }}
                  >
                    <i
                      className="fa fa-check"
                      style={{ color: '#91dc5a', marginRight: '10px' }}
                    ></i>
                    <b className="text-capitalize checkpoint">
                      Facebook chat enabled
                    </b>
                  </div>
                </var>
              </div>
              <div className="buy-card text-center w-100 checkpoint">
                DURATION: 60 DAYS
              </div>
              <div className="buy-card text-center w-100 order-now-button">
                Order Now
              </div>
            </li>
            <li className="card-1 " style={{ marginRight: '7%' }}>
              <div className="card-name ">
                <h3
                  className="text-capitalize non-iata-package"
                  style={{
                    color: ' #faff00',
                    fontSize: '25px',
                    marginBottom: '0',
                  }}
                >
                  Non IATA Package
                </h3>
                <h3
                  className="text-capitalize bdt-text"
                  style={{
                    backgroundColor: '#743EAE',
                    fontSize: '25px',
                    color: 'white',
                  }}
                >
                  1,00,000 BDT
                </h3>
              </div>
              <div className="card-features text-lg-left">
                <div
                  style={{
                    color: 'black',
                    marginTop: '40px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    Flight + Hotel + Tour DMC + Visa Booking Engine
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Your GDS API (Sabre/Amadeus/Travelport or Galileo)
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Price markup and admin dashboard
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-times"
                    style={{ color: 'gray', marginRight: '10px' }}
                  ></i>
                  <b
                    className="text-capitalize checkpoint"
                    style={{ color: '#FF0000' }}
                  >
                    Web hosting support
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Coupon Code Features
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Multi Vendor Feature (B2C + B2B)
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Convenience Fee Features
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-times"
                    style={{ color: 'gray', marginRight: '10px' }}
                  ></i>
                  <b
                    className="text-capitalize checkpoint"
                    style={{ color: '#FF0000' }}
                  >
                    Free Web Installation
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint"> Your Flight API</b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    100% Open source Without Source Code
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    Multi language + Multi Currencies
                  </b>
                </div>
                <var>
                  <div
                    style={{
                      color: 'black',
                      marginTop: '10px',
                      marginLeft: '20px',
                    }}
                  >
                    <i
                      className="fa fa-check"
                      style={{ color: '#91dc5a', marginRight: '10px' }}
                    ></i>
                    <b className="text-capitalize checkpoint">
                      {' '}
                      Payment Gateway Integration
                    </b>
                  </div>
                  <div
                    style={{
                      color: 'black',
                      marginTop: '10px',
                      marginLeft: '20px',
                    }}
                  >
                    <i
                      className="fa fa-check"
                      style={{ color: '#91dc5a', marginRight: '10px' }}
                    ></i>
                    <b className="text-capitalize checkpoint">
                      Facebook chat enabled
                    </b>
                  </div>
                </var>
              </div>
              <div className="buy-card text-center w-100 checkpoint">
                DURATION: 60 DAYS
              </div>
              <div className="buy-card text-center w-100 order-now-button">
                Order Now
              </div>
            </li>
            <li className="card-1 " style={{ marginRight: '7%' }}>
              <div className="card-name ">
                <h3
                  className="text-capitalize sub-admin-package"
                  style={{
                    color: ' #faff00',
                    fontSize: '25px',
                    marginBottom: '0',
                  }}
                >
                  Sub Admin
                </h3>
                <h3
                  className="text-capitalize bdt-text"
                  style={{
                    backgroundColor: '#025D71',
                    fontSize: '25px',
                    color: 'white',
                  }}
                >
                  50,000 BDT
                </h3>
              </div>
              <div className="card-features text-lg-left">
                <div
                  style={{
                    color: 'black',
                    marginTop: '40px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    Flight + Hotel + Tour DMC + Visa Booking Engine
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Your GDS API (Sabre/Amadeus/Travelport or Galileo)
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Price markup and admin dashboard
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{
                      color: 'rgb(187, 187, 187)',
                      marginRight: '10px',
                    }}
                  ></i>
                  <b
                    className="text-capitalize checkpoint"
                    style={{
                      color: 'rgb(187, 187, 187)',
                    }}
                  >
                    {' '}
                    Web hosting support
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{
                      color: 'rgb(187, 187, 187)',
                      marginRight: '10px',
                    }}
                  ></i>
                  <b
                    className="text-capitalize checkpoint"
                    style={{
                      color: 'rgb(187, 187, 187)',
                    }}
                  >
                    Coupon Code Features
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Multi Vendor Feature (B2C + B2B)
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    {' '}
                    Convenience Fee Features
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    Free Web Installation
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint"> Your Flight API</b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{ color: '#91dc5a', marginRight: '10px' }}
                  ></i>
                  <b className="text-capitalize checkpoint">
                    100% Open source Without Source Code
                  </b>
                </div>
                <div
                  style={{
                    color: 'black',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  <i
                    className="fa fa-check"
                    style={{
                      color: 'rgb(187, 187, 187)',
                      marginRight: '10px',
                    }}
                  ></i>
                  <b
                    className="text-capitalize checkpoint"
                    style={{
                      color: 'rgb(187, 187, 187)',
                    }}
                  >
                    Multi language + Multi Currencies
                  </b>
                </div>
                <var>
                  <div
                    style={{
                      color: 'black',
                      marginTop: '10px',
                      marginLeft: '20px',
                    }}
                  >
                    <i
                      className="fa fa-check"
                      style={{
                        color: 'rgb(187, 187, 187)',
                        marginRight: '10px',
                      }}
                    ></i>
                    <b
                      className="text-capitalize checkpoint"
                      style={{
                        color: 'rgb(187, 187, 187)',
                      }}
                    >
                      Payment Gateway Integration
                    </b>
                  </div>
                  <div
                    style={{
                      color: 'black',
                      marginTop: '10px',
                      marginLeft: '20px',
                    }}
                  >
                    <i
                      className="fa fa-check"
                      style={{
                        color: 'rgb(187, 187, 187)',
                        marginRight: '10px',
                      }}
                    ></i>
                    <b
                      className="text-capitalize checkpoint"
                      style={{
                        color: 'rgb(187, 187, 187)',
                      }}
                    >
                      Facebook chat enabled
                    </b>
                  </div>
                </var>
              </div>
              <div className="buy-card text-center w-100 checkpoint">
                DURATION: 60 DAYS
              </div>
              <div className="buy-card text-center w-100 order-now-button">
                Order Now
              </div>
            </li>
          </ul>
        </div>
        <p className="disclaimer-text">
          Disclaimer:{' '}
          <span style={{ fontWeight: '400', fontSize: '19px' }}>
            After buying the software we will provide a 6-month free service for
            any client. After the 6month if you need any customization work then
            we will charge you on an hourly basis. Our hourly developer price is
            1000 BDT or 15USD.
          </span>
        </p>
        <div className="se-i py-80">
          <div className="container">
            <div className="row">
              <h3
                className="text-center mb-5 col-md-4 offset-md-4 p-2 co-brand"
                style={{ color: '#1B454F', fontSize: '24px' }}
              >
                INTEGRATED PAYMENT GATEWAYS
                <p className="border-all"></p>
              </h3>
            </div>
            <div className="row child-mb-2 ">
              <div className="col-xl-2 col-md-6 col-12">
                <div className="fe-box text-md-left text-center ">
                  <div className="text-center">
                    <img
                      src={Paypal}
                      className="img-fluid mb-4 align-items-center px-5"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-12">
                <div className="fe-box text-md-left text-center">
                  <div className="text-center">
                    <img
                      src={Stripe}
                      className="img-fluid mb-4 align-items-center "
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-12">
                <div className="fe-box text-md-left text-center">
                  <div className="text-center">
                    <img
                      src={Paystack}
                      className="img-fluid mb-4 align-items-center"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-12">
                <div className="fe-box text-md-left text-center">
                  <div className="text-center">
                    <img
                      src={Bkash}
                      className="img-fluid mb-4 align-items-center"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-md-6 col-12"
                style={{ marginBottom: '8%' }}
              >
                <div className="fe-box text-md-left text-center">
                  <div className="text-center">
                    <img
                      src={Payoneer}
                      className="img-fluid mb-4 align-items-center "
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <p className="text-center">
                If you need something else then you have to contact us for
                customs development. Here is our <br />
                <span style={{ fontWeight: '700' }}>
                  WhatsApp no: +8801818898189
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
