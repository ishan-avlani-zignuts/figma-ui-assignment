import React from 'react';

//importing images
import Engagement_img from "../assets/images/ServicesImages/Engagement vector 1 (1).png";
import Communications_img from "../assets/images/ServicesImages/Coominucation vector 1.png";
import Facilitation_img from "../assets/images/ServicesImages/facilation vector 1.png";
import CandR_img from "../assets/images/ServicesImages/Consultation vector 1.png";
import TandM_img from "../assets/images/ServicesImages/Training and vector 1.png";

function Services() {
  return (
    <div>
      
      <div className="service_part">
        <div className="container">
          <div className="row mt-5">
            <div className="project_tittle d-flex flex-column justify-content-center align-items-center">
              <h2>SERVICES</h2>
            </div>
            <div className="col-md-6 my-auto">
              <div className="p-5">
                <div className="service-contant">
                  <h2>Engagement</h2>
                  <p>We love what we do and are driven by achieving great results for our clients. Our awards and impressive
                    client list are testament to our high quality approach. We deliver value, creativity, results and
                    exceptional levels of customer service and professionalism. We specialise in infrastructure development,
                    energy and natural resources.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="container pt-5">
                <img src={Engagement_img} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="communications">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
              <div className="container">
                <img src={Communications_img} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="container p-5">
                <div className="service-contant-left">
                  <h2>Communications</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu,
                    vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="facilitation">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
              <div className="container p-5">
                <div className="service-contant-left">
                  <h2>Facilitation</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu,
                    vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="container">
                <img src={Facilitation_img} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="consultation">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
              <div className="container">
                <img src={CandR_img} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="container p-5">
                <div className="service-contant-left">
                  <h2>Consultation and Research</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="training mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
              <div className="container p-5">
                <div className="service-contant-left">
                  <h2>Training & Mentoring</h2>
                  <p>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creativity, results and exceptional levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="container">
                <img src={TandM_img} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
