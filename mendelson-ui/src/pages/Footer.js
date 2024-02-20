import React from 'react';

//importing images
import fb_icon from "../assets/images/FooterImages/facebook 1.png";
import linkedin_icon from "../assets/images/FooterImages/linkedin 1.png";
import google_icon from "../assets/images/FooterImages/Group 20.png";

function Footer() {
  return (
    <div>
      <footer className="footer mt-4">
        <div className="container">
          <div className="footer_col">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-title">Social icon</div>
                <ul className="links">
                  <li className="footer_data"><img src={fb_icon} alt="" /> Facebook</li>
                  <li className="footer_data"><img src={linkedin_icon} alt="" /> Linkedin</li>
                  <li className="footer_data"><img src={google_icon} alt="" /> Google +</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-title">Explore</div>
                <ul className="links">
                  <li className="footer_data">Services</li>
                  <li className="footer_data">Team</li>
                  <li className="footer_data">Client</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-title">Contact</div>
                <ul className="links">
                  <li className="footer_data">Lorem Ipsum dummy address</li>
                  <li className="footer_data">used for display</li>
                  <li className="footer_data">1234567890</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-title">Email</div>
                <ul className="links">
                  <li className="footer_data">mendlesoncommunication@email.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-4">
          <div className="container">
            <p style={{ textAlign: "center" }}>© Copyright 2024 Mendleson Communication Pvt Ltd</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
