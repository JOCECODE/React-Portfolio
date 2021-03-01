import React from 'react';
import "./Projects.css";
import Portfolio from "../Components/PortfolioFolder/Portfolio";

export default function Projects() {
 return (
  <div className="projContainer">
  <div className="noPadding">
   <div className="a">
    PROJECTS
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    
   </div>
  </div>
  <div className="spacerMarginTop">
   <br/>
  </div>
 <Portfolio/>
 </div>
 )
}
