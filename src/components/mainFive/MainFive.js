import React from 'react';
import '../main/main.css';
import '../navbar/navbarComp.css';
import Arisha from '../../images/arisha.png';
import ICT from '../../images/ictdivision-logo.png';
import Brac from '../../images/brac.png';
import Btcl from '../../images/btcl.png';
import PowerMinistry from '../../images/power-minstry.png';
import Prothomalo from '../../images/prothom-alo.png';
import IlOgo from '../../images/i-logo.png';

export const MainFive = () => {
  return (
    <div>
      <div className="se-i py-80">
        <div className="container">
          <div className="row">
            <h3
              className="text-center mb-5 col-md-4 offset-md-4 p-2 "
              style={{ fontSize: '24px', fontWeight: '700', color: '#030085' }}
            >
              Honourable Clients of Rexzimtech
              <p className="border-all"></p>
            </h3>
          </div>
          <div className="row child-mb-2">
            <div className="col-xl-3 col-md-6 col-12">
              <div className="fe-box text-md-left text-center pl-5">
                <div className="text-center">
                  <img
                    src={Arisha}
                    className="img-fluid mb-4 align-items-center img-background px-5"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="fe-box text-md-left text-center">
                <div className="text-center">
                  <img
                    src={ICT}
                    className="img-fluid mb-4 align-items-center img-background"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="fe-box text-md-left text-center">
                <div className="text-center">
                  <img
                    src={PowerMinistry}
                    className="img-fluid mb-4 align-items-center img-background"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="fe-box text-md-left text-center">
                <div className="text-center">
                  <img
                    src={Prothomalo}
                    className="img-fluid mb-4 align-items-center img-background"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="fe-box text-md-left text-center">
                <div className="text-center">
                  <img
                    src={Brac}
                    className="img-fluid mb-4 align-items-center img-background"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="fe-box text-md-left text-center">
                <div className="text-center">
                  <img
                    src={Btcl}
                    className="img-fluid mb-4 align-items-center img-background"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="fe-box text-md-left text-center">
                <div className="text-center">
                  <img
                    src={PowerMinistry}
                    className="img-fluid mb-4 align-items-center img-background"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="fe-box text-md-left text-center">
                <div className="text-center">
                  <img
                    src={Btcl}
                    className="img-fluid mb-4 align-items-center img-background"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="se-i">
        <div className="container">
          <div className="row">
            <h3
              className="text-center mb-5 col-md-4 offset-md-4 p-2 co-brand"
              style={{ fontSize: '24px', fontWeight: '700', color: '#030085' }}
            >
              CO - BRANDS
              <p className="border-all"></p>
            </h3>
          </div>
          <div className="row child-mb-2">
            <div className="col-xl-2 col-md-6 col-12">
              <div className="fe-box text-md-left text-center ">
                <div className="text-center">
                  <img
                    src={Arisha}
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
                    src={IlOgo}
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
                    src={Btcl}
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
                    src={Prothomalo}
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
                    src={Brac}
                    className="img-fluid mb-4 align-items-center "
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
                    src={ICT}
                    className="img-fluid mb-4 align-items-center "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
