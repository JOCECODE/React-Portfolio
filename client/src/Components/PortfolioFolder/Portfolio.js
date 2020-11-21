import React from "react";
import "./Portfolio.css";
import importScript from "../../Hooks/importScript";

function Portfolio() {
   importScript("https://unpkg.com/aos@2.3.1/dist/aos.js");
    return <>
    <h1>
        Projects
    </h1>
    </>
}

export default Portfolio;