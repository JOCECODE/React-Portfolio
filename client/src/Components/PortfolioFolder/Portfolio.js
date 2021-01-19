import React from "react";
import "./Portfolio.css";
import Vibee from "./assets/Vibee.mp4";
import Bud from "./assets/BudjetTracker.mp4";
import Pucman from "./assets/PucmanChase.mp4";
// import Col from "react-bootstrap/Col";

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
          
         
          <div className="col-xs-10">
            <video className="video" width="360" height="360" autoPlay muted >
            <source src={Vibee} type="video/mp4"/>
          </video>

          </div>

          <div id="noPadding" className="col-xs-2" data-aos="zoom-in-left" data-aos-duration="2500">
            hello there I dont know why hey I dont know why I I run away!
          </div>

          {/* <Col xs={12} md={4}>
          <p>
            This is holding just a few amount of text before I can go to the mall!
          </p>
          </Col> */}
      
      </div>


      <div className="row">
        <div id="noPadding" className="col centerThis" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
           <video width="360" height="360" autoPlay muted >
            <source src={Bud} type="video/mp4"/>
          </video>
          
        </div>
    </div>
    <div className="row">
        <div  id="noPadding" className="col right centerThis" data-aos="zoom-in-right" data-aos-duration="1500">
        <video width="360" height="360" autoPlay muted >
            <source src={Pucman} type="video/mp4"/>
          </video>
        </div>
    </div>
  </div>
    
    
    </>
}

export default Portfolio;