import React from 'react';
import './about.css';
import Man from '../../images/man.png';
import ProfileOne from '../../images/pp1.png';
import ProfileTwo from '../../images/pp2.png';
import ProfileThree from '../../images/pp3.png';
import ProfileFour from '../../images/pp4.png';
import VectorOne from '../../images/Vector1.png';
import VectorTwo from '../../images/vector2.png';
import VectorThree from '../../images/vector3.png';
import Abkhazia from '../../images/icons/flags/abkhazia.svg';
import Kosovo from '../../images/icons/flags/kosovo.svg';
import Italy from '../../images/icons/flags/italy.svg';
import France from '../../images/icons/flags/france.svg';
import Australia from '../../images/icons/flags/australia.svg';
import Aland from '../../images/icons/flags/aland-islands.svg';
import Bolivia from '../../images/icons/flags/bolivia.svg';
import Brazil from '../../images/icons/flags/brazil.svg';
import Bahrain from '../../images/icons/flags/bahrain.svg';
import Belgium from '../../images/icons/flags/belgium.svg';
import India from '../../images/icons/flags/india.svg';
import Japan from '../../images/icons/flags/japan.svg';
import Chad from '../../images/icons/flags/chad.svg';
import Afghanistan from '../../images/icons/flags/afghanistan.svg';
import Cameroon from '../../images/icons/flags/cameroon.svg';
import Germany from '../../images/icons/flags/germany.svg';
import Map from '../../images/map.png';
import { Footer } from '../footer/Footer';

export const About = () => {
  return (
    <div>
      <div class="position-relative header">
        <div class="container">
          <div
            class="contain position-relative text-xl-left text-md-center text-left"
            style={{ marginTop: '8%' }}
          >
            <h1 class="mb-4 text-uppercase" style={{ textAlign: 'left' }}>
              About us
            </h1>
            <p class="mb-0" style={{ textAlign: 'left' }}>
              VROCKET is a leading web hosting solutions company. Since our
              founding in 2003, Vrocket has continually innovated new ways to
              deliver on our mission: to empower people to fully harness the
              web.
            </p>
            <img
              src={Man}
              class="img-fluid position-absolute float-img d-xl-block d-none"
              alt="man"
            />
          </div>

          <div class="shapes position-absolute w-100 h-100">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
          </div>
        </div>
      </div>

      <div class="section-4 py-80 bg-2">
        <div class="container">
          <div class="section-head">
            <h6
              class="mb-0"
              style={{
                fontSize: '15px',
                textTransform: 'uppercase',
                color: '#f8a218',
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              Meet Our Team
            </h6>
            <h2 class="my-3" style={{ color: 'black', fontSize: '38px' }}>
              Get to know our leadership
            </h2>
            <p class="mb-0 mx-auto" style={{ color: '#828282' }}>
              Our virtual private servers are built from the ground using all
              SSD storage. Enjoy increased power, flexibility, and control for
              your websites.
            </p>
          </div>

          <div className="row child-mb-2">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-xl-0">
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
            <div className="col-xl-3 col-lg-4 col-md-6 mb-xl-0">
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
            <div className="col-xl-3 col-lg-4 col-md-6 mb-md-0">
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
            <div className="col-xl-3 col-lg-4 col-md-6 mb-0">
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
      <div class="map-section py-80 d-md-block d-none">
        <div class="container">
          <div class="section-head">
            <h6
              class="mb-0"
              style={{
                fontSize: '15px',
                textTransform: 'uppercase',
                color: '#f8a218',
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              around the world
            </h6>
            <h2 class="my-3" style={{ color: 'black', fontSize: '38px' }}>
              We are around you everywhere
            </h2>
            <p class="mb-0 mx-auto" style={{ color: '#828282' }}>
              VRocket was bootstrapped in 2004 and we’ve been on an epic ride
              ever since. We had a simple idea to let you create a website for
              FREE.
            </p>
          </div>

          <div class="content">
            <img src={Map} class="img-fluid" id="map-img" alt="world-map" />

            <div class="f-c">
              <div class="flag e01-f">
                <img src={Abkhazia} class="img-fluid" alt="abkhazia-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.ab</a>
                </div>
              </div>
              <div class="flag e02-f">
                <img
                  src={Afghanistan}
                  class="img-fluid"
                  alt="afghanistan-flag"
                />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.af</a>
                </div>
              </div>
              <div class="flag e03-f">
                <img src={Aland} class="img-fluid" alt="aland-islands-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.is</a>
                </div>
              </div>
              <div class="flag e04-f">
                <img src={Australia} class="img-fluid" alt="australia-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.au</a>
                </div>
              </div>
              <div class="flag e05-f">
                <img src={Bahrain} class="img-fluid" alt="bahrain-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.ba</a>
                </div>
              </div>
              <div class="flag e06-f">
                <img src={Belgium} class="img-fluid" alt="belgium-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.be</a>
                </div>
              </div>
              <div class="flag e07-f">
                <img src={Bolivia} class="img-fluid" alt="bolivia-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.be</a>
                </div>
              </div>
              <div class="flag e08-f">
                <img src={Brazil} class="img-fluid" alt="brazil-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.br</a>
                </div>
              </div>
              <div class="flag e09-f">
                <img src={Cameroon} class="img-fluid" alt="cameroon-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.ca</a>
                </div>
              </div>
              <div class="flag e10-f">
                <img src={Chad} class="img-fluid" alt="chad-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.ch</a>
                </div>
              </div>
              <div class="flag e11-f">
                <img src={France} class="img-fluid" alt="france-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.fr</a>
                </div>
              </div>
              <div class="flag e12-f">
                <img src={Germany} class="img-fluid" alt="germany-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.ge</a>
                </div>
              </div>
              <div class="flag e13-f">
                <img src={India} class="img-fluid" alt="india-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.id</a>
                </div>
              </div>
              <div class="flag e14-f">
                <img src={Italy} class="img-fluid" alt="italy-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.it</a>
                </div>
              </div>
              <div class="flag e15-f">
                <img src={Japan} class="img-fluid" alt="japan-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.ja</a>
                </div>
              </div>
              <div class="flag e16-f">
                <img src={Kosovo} class="img-fluid" alt="kosovo-flag" />
                <span class="flag-border"></span>
                <div class="flag-info">
                  <a href="#vrocket">www.vrocket.com.ko</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
