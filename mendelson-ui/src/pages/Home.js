import React from "react";
import image1 from "../assets/images/i1.png";
import image2 from "../assets/images/i2.png";

import Hero from "./Hero";
import Navbar from "./Navbar";
function Home() {
  return (
    <div className="navigation_part">
      <div>
        <img className="top-right-image" src={image1} alt="image1"></img>
      </div>
      <div>
        <img className="top-left-image" src={image2} alt="image2"></img>
      </div>
      
      <Navbar />

      <Hero />
      
    </div>
  );
}

export default Home;
