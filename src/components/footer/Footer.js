import React from 'react';
import './footer.css';

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="n-l">
          <div className="container text-center">
            <h2 className="mb-4">Subscribe To Our Newsletter</h2>
            <form action="#" className="mx-auto text-center">
              <div className="d-sm-flex align-items-center justify-content-start">
                <input
                  type="email"
                  className="w-100 mb-sm-0 mb-3"
                  placeholder="Email Address"
                  autocomplete="off"
                  required
                />
                <button className="text-uppercase" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="links">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-4 col-6 mb-lg-0 mb-3">
                <ul className="list-unstyled mb-0">
                  <li className="title text-uppercase mb-3">Hosting</li>
                  <li>
                    <a href="#shared" className="text-capitalize">
                      shared hosting
                    </a>
                  </li>
                  <li>
                    <a href="#cloud" className="text-capitalize">
                      cloud hosting
                    </a>
                  </li>
                  <li>
                    <a href="#vps" className="text-capitalize">
                      VPS hosting
                    </a>
                  </li>
                  <li>
                    <a href="#hosting" className="text-capitalize">
                      dedicated hosting
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-4 col-6 mb-lg-0 mb-3">
                <ul className="list-unstyled mb-0">
                  <li className="title text-uppercase mb-3">Company</li>
                  <li>
                    <a href="#about" className="text-capitalize">
                      Software Development
                    </a>
                  </li>
                  <li>
                    <a href="#terms" className="text-capitalize">
                      Website Development
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="text-capitalize">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="text-capitalize">
                      E-Commerce
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="text-capitalize">
                      Custom Software Development
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="text-capitalize">
                      SEO
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-6 mb-lg-0 mb-md-3">
                <ul className="list-unstyled mb-0">
                  <li className="title text-uppercase mb-3">Products</li>
                  <li>
                    <a href="#program" className="text-capitalize">
                      OTA
                    </a>
                  </li>
                  <li>
                    <a href="#payment" className="text-capitalize">
                      iRecharge
                    </a>
                  </li>
                  <li>
                    <a href="#compare" className="text-capitalize">
                      CRM
                    </a>
                  </li>
                  <li>
                    <a href="#review" className="text-capitalize">
                      Rexzim E-Commarce
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-6 mb-lg-0 mb-md-3">
                <ul className="list-unstyled mb-0">
                  <li className="title text-uppercase mb-3">Address</li>
                  <li>
                    <a href="#checker" className="text-capitalize">
                      CORPORATE OFFICE : Software Technology Park Dhaka-1215.
                    </a>
                  </li>
                  <li style={{ marginTop: '30px' }}>
                    <a href="#transfer" className="text-capitalize">
                      Phone : +88 01818898189 Email : info@rexzimtech.com Web :
                      www.rexzimtech.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="c-r text-left">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="mb-0">&copy; 2020 REXZIM TECHNOLOGY LTD </p>
                <p className="comment mb-0">
                  Developed By &nbsp;
                  <a
                    href="http://rexzimtech.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Rexzimtech
                  </a>
                </p>
              </div>
              <div className="col c-r style-social-footer">
                <span
                  style={{ color: 'white', display: 'flex', marginTop: '10px' }}
                >
                  <span className="socials">Follow our Socials</span>
                </span>
                <div
                  className="footer-social-link"
                  style={{ marginLeft: '4%' }}
                >
                  <ul>
                    <li>
                      <a href="#fb">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#tweet">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#google">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#linkdin">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#insta">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#youtube">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-100"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
