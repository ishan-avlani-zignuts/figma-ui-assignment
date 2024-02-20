import React from 'react';

//importing images
import prj_1 from "../assets/images/ProjectImages/Our Project_ 1 img 1.png";
import prj_2 from "../assets/images/ProjectImages/Our Project _ 2 img 1.png";
import prj_3 from "../assets/images/ProjectImages/Our Project_ 3 img 1.png";

function Projects() {
  return (
    <div>
      <div className="project mt-5 mb-5">
        <div className="container">
          <div className="project_tittle mb-5">
            <h2>OUR PROJECTS</h2>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 mb-3">
              <div className="project-img">
                <img src={prj_1} alt="" className="image" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="project-img">
                    <img src={prj_2} alt="" className="image" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="project-img">
                    <img src={prj_3} alt="" className="image mt-md-3" />
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

export default Projects;
