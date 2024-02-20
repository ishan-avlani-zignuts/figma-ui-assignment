import React from 'react';
import hero_img from '../assets/images/Group 1.png';
import image3 from "../assets/images/i7.png";
function Hero() {
  return (
    <div className="hero_section">
      <div className="mb-5">
        <div className="row g-0">
          <div className="col-md-6 my-auto">
            <div className="hero_img">
              <img src={hero_img} alt="" className="" />
            </div>
          </div>
          <div className="col-md-6 my-auto">
            <div className="p-5">
              <div className="hero">
                <h1> Mendleson <br/>Communication <br/>and Engagement </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                  Malesuada sed ipsum, ut quam volutpat, tortor.
                </p>
                <img className="bottom-right-image" src={image3} alt="image2"></img>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
        
    </div>
  );
}

export default Hero;
