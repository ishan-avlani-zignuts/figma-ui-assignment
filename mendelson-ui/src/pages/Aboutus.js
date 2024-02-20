import React from 'react';
//importing images

import about_img from "../assets/images/about us 1.png";
import underline_img from "../assets/images/Group 30.png";
import about_icon1 from "../assets/images/about_icon1.png";
import communication_icon from "../assets/images/coomunication icon 1.png";
function Aboutus() {
  return (
    <div className="aboutus">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="aboutus-img">
              <img src={about_img} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutus-content">
              <h2>ABOUT US</h2>
              <img className='aboutus_underline_img' src={underline_img} alt="" />
              <p>We love what we do and are driven by achieving great results for our clients. Our awards and impressive
                client list are testament to our high quality approach. We deliver value, creativity, results and
                exceptional levels of customer service and professionalism. We specialise in infrastructure development,
                energy and natural resources.</p>
            </div>
            <div className="icon">
              <div className="row">
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="aboutus_Engagement">
                        <img src={about_icon1} alt="" />
                        <h2 className="mt-3">Engagement</h2>
                        <p>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.<br />READ MORE</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="aboutus_Engagement">
                        <img src={communication_icon} alt="" />
                        <h2 className="mt-3">Communications</h2>
                        <p>We are award-winning leaders in communications and campaign management.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
