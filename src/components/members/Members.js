import React from 'react';
import '../main/main.css';
import '../navbar/navbarComp.css';
import Team from '../../images/team.png';
import HappyCust from '../../images/happy-customer.png';
import Country from '../../images/country.png';

export const Members = () => {
  return (
    <div>
      <div className="se-i">
        <div className="container">
          <div className="row">
            <h3 className="text-center mb-5 col-md-4 offset-md-4 p-2 glance-text">
              Rexzim at A Glance
              <p className="border-all"></p>
            </h3>
          </div>
          <div className="row child-mb-2">
            <div className="col-xl-2 col-md-6 col-12">
              <div className="fe-box text-md-left text-center ">
                <div className="text-center">
                  <img
                    src={Team}
                    className="img-fluid mb-4 align-items-center px-5"
                    alt=""
                  />
                </div>
                <h1 className="count">
                  20k+ <p className="team-text">Team Member</p>
                </h1>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-12">
              <div className="fe-box text-md-left text-center">
                <div className="text-center">
                  <img
                    src={Team}
                    className="img-fluid mb-4 align-items-center "
                    alt=""
                  />
                </div>
                <h1 className="count">
                  10k+ <p className="team-text">Amazing Product</p>
                </h1>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-12">
              <div className="fe-box text-md-left text-center">
                <div className="text-center">
                  <img
                    src={HappyCust}
                    className="img-fluid mb-4 align-items-center"
                    alt=""
                  />
                </div>
                <h1 className="count">
                  5k+ <p className="team-text">Happy Client</p>
                </h1>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-12">
              <div className="fe-box text-md-left text-center">
                <div className="text-center">
                  <img
                    src={Country}
                    className="img-fluid mb-4 align-items-center"
                    alt=""
                  />
                </div>
                <h1 className="count">
                  10k+ <p className="team-text">Countries Worldwide</p>
                </h1>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-12">
              <div className="fe-box text-md-left text-center">
                <div className="text-center">
                  <img
                    src={Team}
                    className="img-fluid mb-4 align-items-center "
                    alt=""
                  />
                </div>
                <h1 className="count">
                  10 <p className="team-text">Years Experienced</p>
                </h1>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-12">
              <div className="fe-box text-md-left text-center">
                <div className="text-center">
                  <img
                    src={Team}
                    className="img-fluid mb-4 align-items-center "
                    alt=""
                  />
                </div>
                <h1 className="count">
                  5k+ <p className="team-text">Client Reviews</p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
