import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

function Header() {
    const history = useHistory();
   
return  <div className="about-area">
    <div className="container">
    <div className="row">
        <div className="col-lg-4">
            <div className="about-img">
                <img src="https://i.imgur.com/hCVt35Q.jpg" alt="Self-Portrait"/>
            </div>
        </div>
        <div className="col-lg-6 mt-3 mt-md-5">
         <div className="about-text">   
             <h2>Jose Ulices Perez Jr.</h2>
            <p>
                A full-stack web developer from Norwalk, C.A. I enjoy making easy to use, fast and responsive websites.
            </p>
            <button className="profileButton" onClick={() => history.push("/projects")} >Learn More!</button>
        </div>
        </div>
    </div>
</div>
{/* <svg className="waveDiv" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
    <path fill="#283d6f" 
    fillOpacity="1" 
    d="M0,224L34.3,202.7C68.6,
    181,137,139,206,154.7C274.3,
    171,343,245,411,256C480,267,
    549,213,617,170.7C685.7,128,
    754,96,823,101.3C891.4,107,960,
    149,1029,160C1097.1,171,1166,149,
    1234,138.7C1302.9,128,1371,128,1406,
    128L1440,128L1440,320L1405.7,320C1371.4,
    320,1303,320,1234,320C1165.7,320,1097,320,
    1029,320C960,320,891,320,823,320C754.3,320,
    686,320,617,320C548.6,320,480,320,411,320C342.9,
    320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
  </svg> */}
  {/* NOT BEING USED YET */}
  {/* <div className="horizontalBlackLine">
  </div> */}
</div>
}

export default Header;