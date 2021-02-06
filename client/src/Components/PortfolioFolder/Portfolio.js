import React from "react";
import "./Portfolio.css";
import Vibee from "./assets/Vibee.mp4";
import Bud from "./assets/BudjetTracker.mp4";
import Pucman from "./assets/PucmanChase.mp4";

// import Col from "react-bootstrap/Col";

function Portfolio() {
    return <>
         {/* <div className="container">
    <div className="row projectFont">
        <div className="col">
              <p>
                  Projects
              </p>
          </div>
      </div>
  </div> */}


  <div className="container projectsContainer">
        
        
        {/* FIRST ROW */}
        <div className="row">
          
         
          <div className="col-4" data-aos="zoom-in-left" data-aos-duration="2500">
            <video className="video" width="360" height="360" autoPlay muted >
            <source src={Vibee} type="video/mp4"/>
          </video>

          </div>

          <div id="noPadding" className="col-8 left" data-aos="zoom-in-left" data-aos-duration="2000">
            <div>hello there I dont know why hey I dont know why I I run away!</div>
          </div>

      </div>

      {/* SECOND ROW */}
      <div className="row">
           <div id="noPadding" className="col-8" data-aos="zoom-in-right" data-aos-duration="2000">
      <div className="right my-auto">
             Budget Tracker application that also works offline using Webpack
           </div>
      </div>
      
      <div id="noPadding" className="col-4" data-aos="zoom-in-right" data-aos-duration="1000">
           <video width="360" height="360" autoPlay muted >
            <source src={Bud} type="video/mp4"/>
          </video>

        </div>
    
   
    
    </div>
   
   
    {/* THIRD ROW */}
    <div className="row">
        <div className="col-4" data-aos="zoom-in-left" data-aos-duration="2500">
        <video className="video" width="360" height="360" autoPlay muted >
            <source src={Pucman} type="video/mp4"/>
          </video> 
        </div>  

        <div id="noPadding" className="col-8 left" data-aos="zoom-in-left" data-aos-duration="2000">
            THIS IS TEXT FOR THE PUCMAN LAST ONE
        </div>

    </div>



  </div>
    
    
    </>
}

export default Portfolio;