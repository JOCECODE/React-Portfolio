import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return <>
         <div className="container">
    <div className="row projectFont">
        <div className="col">
              <p>
                  Projects
              </p>
          </div>
      </div>
  </div>
  <div className="container projectsContainer">
        <div className="row">
          <div className="col left centerThis" data-aos="zoom-in-left" data-aos-duration="2500">
            <img src="https://i.imgur.com/hCVt35Q.jpg" alt="" height="280px" width="300px"/>
            
          </div>
      </div>
      <div className="row">
        <div className="col centerThis" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
          <img src="https://i.imgur.com/hCVt35Q.jpg" alt="" height="280px" width="300px"/>
          
        </div>
    </div>
    <div className="row">
        <div className="col right centerThis" data-aos="zoom-in-right" data-aos-duration="1500">
          <img src= "https://i.imgur.com/hCVt35Q.jpg" alt="" height="280px" width="300px"/>
        </div>
    </div>
  </div>
    </>
}

export default Portfolio;