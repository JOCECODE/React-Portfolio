import React from 'react';
import "./Footer.css";
import Cat from "./icons/githubNoBack.png";

export default function Footer() {
 
 const openLink = (url) => {
  let newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

 return (
  <>
   <div  className="footerContainer">



    <div className="bottomName">
     JOSE ULICES PEREZ JR. <span style={{color: "red"}}>@2021</span>
    </div >

    <div title="GitHub" onClick={() => openLink("https://github.com/JOCECODE")} className="square">
     <img  alt="Github Logo"  className="kitty" src={Cat}/>
    </div>

    <div title="LinkedIn" onClick={() => openLink("https://www.linkedin.com/in/jose-u-perez-jr/")} className="square square2">
     <img  alt="Github Logo"  className="kitty" src={Cat}/>
    </div>

    <div title="Resume" onClick={() => openLink("https://docs.google.com/document/d/1uvdayI4uSEahfE8jJxs03TZfWyIwOzSvW7L7H3s-Eos/edit?usp=sharing")} className="square square3">
     <img  alt="Github Logo"  className="kitty" src={Cat}/>
    </div>




   </div>
  </>
 )
}
