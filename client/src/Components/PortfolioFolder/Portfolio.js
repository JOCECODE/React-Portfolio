import React from "react";
import "./Portfolio.css";
import Vibee from "./assets/Vibee.mp4";
import Bud from "./assets/BudjetTracker.mp4";
import Pucman from "./assets/PucmanChase.mp4";

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
          <div id="noPadding" className="col left centerThis" data-aos="zoom-in-left" data-aos-duration="2500">
          <video width="480" height="480" autoPlay muted >
            <source src={Vibee} type="video/mp4"/>
          </video>
          </div>
      </div>
      <div className="row">
        <div id="noPadding" className="col centerThis" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
           <video width="480" height="480" autoPlay muted >
            <source src={Bud} type="video/mp4"/>
          </video>
          
        </div>
    </div>
    <div className="row">
        <div  id="noPadding" className="col right centerThis" data-aos="zoom-in-right" data-aos-duration="1500">
        <video width="480" height="480" autoPlay muted >
            <source src={Pucman} type="video/mp4"/>
          </video>
        </div>
    </div>
  </div>
    </>
}

export default Portfolio;