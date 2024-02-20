import React from 'react';

//importing images
import client_img1 from "../assets/images/CllientsImages/Group 13.png";
import client_img2 from "../assets/images/CllientsImages/Group 15.png";

function Clients() {
  return (
    <div>
      <div className="clients mt-5">
        <div className="container">
          <div className="project_tittle">
            <center><h2>OUR CLIENTS</h2></center>
          </div>
        
          <div className="row">
            <div className="col-md-12">
                <a href="#">
                  <img src={client_img1} alt="" />
                </a>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12">
                <a href="#">
                  <img src={client_img2} alt="" />
                </a>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Clients;
