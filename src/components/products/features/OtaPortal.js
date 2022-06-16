import React from 'react';
import './otaPortal.css';
import Carbon from '../../../images/carbon.png';
import Api from '../../../images/api.png';
import Price from '../../../images/dollar.png';
import Security from '../../../images/security.png';
import Agroup from '../../../images/agroup.png';
import Cent from '../../../images/cent.png';
import Wallet from '../../../images/wallet.png';
import msg from '../../../images/msg.png';
import vault from '../../../images/vault.png';
import Currency from '../../../images/currency.png';
import Mobile from '../../../images/mobile.png';
import PC from '../../../images/pc.png';

export const OtaPortal = () => {
  return (
    <div className="se-i">
      <div className="container">
        <div className="row">
          <h3 className="text-center mb-5 col-md-4 offset-md-4 p-2 ota-travel-text">
            Features of OTA Travel Portal
          </h3>
        </div>
        <div className="row child-mb-2" style={{ marginTop: '4%' }}>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={Carbon}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Flight + Hotel Booking Engine</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                Demo test Demo testDemo testDemo test
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={Api}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Our GDS API </p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                (Sabre/Amadeus/Travelport or Galileo)
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={Price}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Price markup</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                Demo test Demo testDemo testDemo test
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 space-content">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={vault}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Secured</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                SSL & 3D Protection Enabled Refined all External Connections
                Anti Hacking, Backdoors & Shells
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 space-content">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={Wallet}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Payment Gateways</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                Demo test Demo testDemo testDemo test Demo test Demo testDemo
                testDemo test
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 space-content">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={Cent}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Multi Currency</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                Supported by Major Currencies Enable Disable any Currency Add,
                Edit or Remove Any Currency
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 space-content">
            <div className="fe-box text-md-left text-center height-style">
              <div className="text-center">
                <img
                  src={Agroup}
                  className="img-fluid mb-4 align-items-center"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Multi Language</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                Multi-Language System Translate Any CMS
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 space-content">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={PC}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Web Application</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                Demo test Demo testDemo testDemo test
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 space-content">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={Mobile}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Mobile Application</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                Demo test Demo testDemo testDemo test
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 space-content">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={Currency}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Web hosting support</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                Demo test Demo testDemo testDemo test
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 space-content">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={msg}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Facebook chat enabled</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                Demo test Demo testDemo testDemo test
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 space-content">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={Cent}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">AIT TAX & Convenience Fee</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                Demo test Demo testDemo testDemo test
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 space-content">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={Security}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Secured</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                SSL & 3D Protection Enabled Refined all External Connections
                Anti Hacking, Backdoors & Shells
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 space-content">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={msg}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">Facebook chat enabled</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                Demo test Demo testDemo testDemo test
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 space-content">
            <div className="fe-box text-md-left text-center">
              <div className="text-center">
                <img
                  src={Cent}
                  className="img-fluid mb-4 align-items-center height-style"
                  alt=""
                />
              </div>
              <p className="icon-bottom-text">AIT TAX & Convenience Fee</p>
              <p className="para-text" style={{ marginLeft: '28%' }}>
                Supported by Major Currencies Enable Disable any Currency Add,
                Edit or Remove Any Currency
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
