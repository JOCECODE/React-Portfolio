import React from 'react';
import "./Footer.css";
import Cat from "./icons/githubNoBack.png";

export default function Footer() {
 return (
  <>
   <div className="footerContainer">
    
    <div id="tits" className="square">
     <img id="big" className="kitty" src={Cat}/>
    </div>
    <div className="bottomName">
     JOSE ULICES PEREZ JR. <span style={{color: "red"}}>@2021</span>
    </div >
   </div>
  </>
 )
}
