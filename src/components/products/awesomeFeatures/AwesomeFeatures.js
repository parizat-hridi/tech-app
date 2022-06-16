import React from 'react';
import './awesomeFeatures.css';
import FlightOne from '../../../images/flights7.png';
import FlightTwo from '../../../images/flight2.png';
import FlightThree from '../../../images/flights3.png';
import FlightFour from '../../../images/flights4.png';

export const AwesomeFeatures = () => {
  return (
    <div className="se-i">
      <div className="container home-container">
        <div className="row">
          <h3
            className="text-center mb-5 col-md-4 offset-md-4 p-2 rexzim-featcher"
            style={{ marginTop: '7%' }}
          >
            Our awesome Features
            <p className="border-all"></p>
          </h3>
        </div>
        <div className="se-ii">
          <div className="container child-mb-6">
            <div className="row align-items-center text-lg-left text-center">
              <div className="col-lg-5 order-lg-2 mb-lg-0 mb-4">
                <div className=" text-lg-left mb-lg-0">
                  <h2
                    className="my-3"
                    style={{
                      color: ' #030085',
                      lineHeight: 'normal',
                      textAlign: 'justify',
                      fontWeight: '700',
                    }}
                  >
                    Search filter and reserve flights tickets
                  </h2>
                  <p
                    className="mb-0 mx-auto"
                    style={{ textAlign: 'justify', marginTop: '20px' }}
                  >
                    Premium features included search by oneway return ticket or
                    offer multi destination booking facility to your clients
                    with with realtime and opensource code platform of
                    easybooking
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mr-lg-auto order-lg-1">
                <img src={FlightOne} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="row align-items-center text-lg-left text-center">
              <div className="col-lg-5 mb-lg-0 mb-4">
                <div className="text-lg-left mb-lg-0">
                  <h2
                    style={{
                      color: ' #030085',
                      lineHeight: 'normal',
                      textAlign: 'justify',
                      fontWeight: '700',
                    }}
                  >
                    Flights booking module
                  </h2>
                  <p
                    className="mb-0 mx-auto"
                    style={{
                      textAlign: 'justify',
                      marginTop: '20px',
                    }}
                  >
                    Everyone has email, but that doesn’t mean all email
                    <br /> is the same. Customers are nine times more likely
                    <br /> to choose a business with a professional address
                    <br />
                    like you@example.ro.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 ml-lg-auto text-lg-right">
                <img src={FlightTwo} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="row align-items-center text-lg-left text-center mb-0">
              <div className="col-lg-5 order-lg-2 mb-lg-0 mb-4">
                <div className=" text-lg-left mb-lg-0">
                  <h2
                    className="my-3"
                    style={{
                      color: ' #030085',
                      lineHeight: 'normal',
                      textAlign: 'justify',
                      fontWeight: '700',
                    }}
                  >
                    Complete flights back-office system
                  </h2>
                  <p
                    className="mb-0 mx-auto"
                    style={{
                      textAlign: 'justify',
                      marginTop: '20px',
                    }}
                  >
                    Sell flights tickets direct from your own GDS account simply
                    <br />
                    by connecting with your credentials. no tech skills required
                    <br />
                    to make it functionaly just deploy phptravels on your site
                    <br />
                    and enable which modules and services you like to sell from.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mr-lg-auto order-lg-1">
                <img src={FlightThree} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="row align-items-center text-lg-left text-center">
              <div className="col-lg-5 mb-lg-0 mb-4">
                <div className="text-lg-left mb-lg-0">
                  <h2
                    className="my-3"
                    style={{
                      color: ' #030085',
                      lineHeight: 'normal',
                      textAlign: 'justify',
                      fontWeight: '700',
                    }}
                  >
                    Real-time bookings from <br />
                    GDS
                  </h2>
                  <p
                    className="mb-0 mx-auto"
                    style={{
                      textAlign: 'justify',
                      marginTop: '20px',
                    }}
                  >
                    Aggregated with multiple GDS flights API's
                    <br /> for real-time booking
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 ml-lg-auto text-lg-right"
                style={{ paddingLeft: '40px' }}
              >
                <img src={FlightFour} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="se-vi py-80">
        <div className="container">
          <div className="section-head">
            <h5 className="mb-0 meet-text" style={{ marginTop: '5%' }}>
              full fledge flights booking engine
            </h5>
            <p
              className="mb-0 mx-auto my-3"
              style={{ textAlign: 'justify', paddingTop: '26px' }}
            >
              Real time search of Airline Flights for any destination with
              integrated API around the word .We have selected the cheapest
              flight to the most sought after destinations tickets from more
              than 400 carriers available so you can have benefit of the best
              domestic and international flights at the lowest price. Now we
              support major flights API / XML / Json Integration with
              personalization benefit but we do have plan to including more API
              vendors over the time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
