import Header from "./Components/HeaderFolder/Header";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from "./Components/PortfolioFolder/Portfolio";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./Components/Projects";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <Header/>
    <Projects/>
    <Portfolio/>
   </>
  );
}

export default App;