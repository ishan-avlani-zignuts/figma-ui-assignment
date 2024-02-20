import React from 'react';

//importing images
import person1_img from "../assets/images/TeamsImages/Person 1 img 1.png";
import person2_img from "../assets/images/TeamsImages/Person 2 img 1.png";
import person3_img from "../assets/images/TeamsImages/Person 3 img 1.png";

function Ourteams() {
  return (
    <div>
      <section id="team">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 mt-5">
              <div className="project_tittle">
                <h2>Our Team</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-box mt-5 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4"> 
                <div className="single-box text-center">
                  <div className="img-area">
                    <img
                      alt=""
                      className="img-fluid"
                      src={person1_img}
                    />
                  </div>
                  <div className="team_data">
                    <h4>Jessica D’suza</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-box text-center">
                  <div className="img-area">
                    <img
                      alt=""
                      className="img-fluid"
                      src={person2_img}
                    />
                  </div>
                  <div className="team_data">
                    <h4>Johny Williams</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-box text-center">
                  <div className="img-area">
                    <img
                      alt=""
                      className="img-fluid"
                      src={person3_img}
                    />
                  </div>
                  <div className="team_data">
                    <h4>Sanya R,</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ourteams;
