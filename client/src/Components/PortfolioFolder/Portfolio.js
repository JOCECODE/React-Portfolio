import React from "react";
import "./Portfolio.css";
import Vibee from "./assets/Vibee.mp4";
import Bud from "./assets/BudjetTracker.mp4";
import Pucman from "./assets/PucmanChase.mp4";

// import Col from "react-bootstrap/Col";

function Portfolio() {
    return <>
        
  <div className="container projectsContainer">
        
        
        {/* FIRST ROW */}
        <div className="row">
          
         
          <div className="col-4" data-aos="zoom-in-left" data-aos-duration="2500">
            <video className="video" width="360" height="360" autoPlay muted loop="true" >
            <source src={Vibee} type="video/mp4"/>
          </video>

          </div>

          <div id="noPadding" className="col-8 left" data-aos="zoom-in-left" data-aos-duration="2000">
            <div className="informationContainer">
              <h3 className="roles"><span className="applicationName">Application:</span> Vibee </h3>
              <h3 className="roles"><span className="applicationName">Tools:</span> React Js / Node / MongoDb </h3>
              <h3 className="roles"><span className="applicationName">Roles:</span> Designed Homescreen, About Us Page, and Collections page. Created lyric highlighting feature and incorporated Timeago npm package to show how long ago a post was created. </h3>
              
              </div>
          </div>

      </div>

      {/* SECOND ROW */}
      <div className="row">
           <div id="noPadding" className="col-8" data-aos="zoom-in-right" data-aos-duration="2000">
      <div className="right my-auto">
      <div className="webpackContainer">
              <h3 className="roles"><span className="applicationName">Application:</span> Budget Tracker </h3>
              <h3 className="roles"><span className="applicationName">Tools:</span> jQuery / Web-Pack</h3>
              <h3 className="roles"><span className="applicationName">Roles:</span> Create an application </h3>
              <h3 className="roles"> that can store information</h3>
              <h3 className="roles">both offline and online.</h3>
              
              </div>
           </div>
      </div>
      
      <div id="noPadding" className="col-4" data-aos="zoom-in-right" data-aos-duration="1000">
           <video width="360" height="360" autoPlay muted loop="true">
            <source src={Bud} type="video/mp4"/>
          </video>

        </div>
    
   
    
    </div>
   
   
    {/* THIRD ROW */}
    <div className="row">
        <div className="col-4" data-aos="zoom-in-left" data-aos-duration="2500">
        <video className="video" width="360" height="360" autoPlay muted loop="true">
            <source src={Pucman} type="video/mp4"/>
          </video> 
        </div>  

        <div id="noPadding" className="col-8 left" data-aos="zoom-in-left" data-aos-duration="2000">
        <div className="pucmanContainer">
              <h3 className="roles"><span className="applicationName">Application:</span> Pucman Chase </h3>
              <h3 className="roles"><span className="applicationName">Tools:</span> Planck-Js (Box 2D) / Sequelize </h3>
              <h3 className="roles"><span className="applicationName">Roles:</span> Designed Instructions Page, Favicon, Game icons (life, time, level, etc.) and High Scores page. Created routes to save user information and to navigate the application.</h3>
              
              </div>
        </div>

    </div>



  </div>
    
    
    </>
}

export default Portfolio;