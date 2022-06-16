import React from 'react';
import '../main/main.css';
import '../navbar/navbarComp.css';
import ProfileOne from '../../images/pp1.png';
import ProfileTwo from '../../images/pp2.png';
import ProfileThree from '../../images/pp3.png';
import ProfileFour from '../../images/pp4.png';
import VectorOne from '../../images/Vector1.png';
import VectorTwo from '../../images/vector2.png';
import VectorThree from '../../images/vector3.png';

export const MainFour = () => {
  return (
    <>
      <div className="se-vi py-80">
        <div className="container">
          <div className="section-head">
            <h5 className="mb-0 meet-text">Meet Our Team</h5>
            <h2 className="my-3">Get to know our leadership</h2>
            <p className="mb-0 mx-auto">
              Our virtual private servers are built from the ground using all
              SSD storage. Enjoy increased power, flexibility, and control for
              your websites.
            </p>
          </div>
          <div className="row child-mb-2">
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-xl-0"
              style={{ marginTop: '2%' }}
            >
              <div className="item has-sm-shadow">
                <div className="img-c position-relative">
                  <img
                    src={ProfileOne}
                    className="img-fluid"
                    alt=""
                    style={{ width: '19rem' }}
                  />
                  <div className="position-absolute">
                    <h4 className="f-name mb-0">Rahim </h4>
                    <h5 className="l-name mb-0">Mozumder</h5>
                  </div>
                </div>
                <div className="info position-relative">
                  <h6 className="mb-2">Co-Founder</h6>
                  <p className="mb-0" style={{ paddingBottom: '10%' }}>
                    {' '}
                    Co-Head of Technology,
                  </p>
                  <div className="icon has-sm-shadow position-absolute d-flex align-items-center justify-content-center">
                    <img src={VectorOne} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-xl-0"
              style={{ marginTop: '2%' }}
            >
              <div className="item has-sm-shadow">
                <div className="img-c position-relative">
                  <img
                    src={ProfileTwo}
                    className="img-fluid"
                    alt=""
                    style={{ width: '19rem' }}
                  />
                  <div className="position-absolute">
                    <h4 className="f-name mb-0">Khalid</h4>
                    <h5 className="l-name mb-0">Hossam</h5>
                  </div>
                </div>
                <div className="info position-relative">
                  <h6 className="mb-2">Designer</h6>
                  <p className="mb-0">
                    Member, Private Equity & Co-Head of Technology, KKR
                  </p>
                  <div className="icon has-sm-shadow position-absolute d-flex align-items-center justify-content-center">
                    <img src={VectorTwo} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-md-0"
              style={{ marginTop: '2%' }}
            >
              <div className="item has-sm-shadow">
                <div className="img-c position-relative">
                  <img
                    src={ProfileThree}
                    className="img-fluid"
                    alt=""
                    style={{ width: '19rem' }}
                  />
                  <div className="position-absolute">
                    <h4 className="f-name mb-0">Tamer</h4>
                    <h5 className="l-name mb-0">Kareem</h5>
                  </div>
                </div>
                <div className="info position-relative">
                  <h6 className="mb-2">Developer</h6>
                  <p className="mb-0">
                    Member, Private Equity & Co-Head of Technology, KKR
                  </p>
                  <div className="icon has-sm-shadow position-absolute d-flex align-items-center justify-content-center">
                    <img src={VectorThree} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-0"
              style={{ marginTop: '2%' }}
            >
              <div className="item has-sm-shadow">
                <div className="img-c position-relative">
                  <img
                    src={ProfileFour}
                    className="img-fluid"
                    alt=""
                    style={{ width: '19rem' }}
                  />
                  <div className="position-absolute">
                    <h4 className="f-name mb-0">Montaser</h4>
                    <h5 className="l-name mb-0">Kamal</h5>
                  </div>
                </div>
                <div className="info position-relative">
                  <h6 className="mb-2">Former Chief</h6>
                  <p className="mb-0">
                    Member, Private Equity & Co-Head of Technology, KKR
                  </p>
                  <div className="icon has-sm-shadow position-absolute d-flex align-items-center justify-content-center">
                    <img src={VectorOne} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
