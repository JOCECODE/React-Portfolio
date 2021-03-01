import Header from "./Components/HeaderFolder/Header";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from "./Components/PortfolioFolder/Portfolio";
import React, { useEffect } from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./Components/Projects";
import Transition from "./Components/Transition";
import Footer from "./Components/Footer";

// function App() {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();
//   }, []);
//   return (
//     <>

    

//     <Header/>
//     <Projects/>
//     <Portfolio/>
//     <Transition/>
//     <Footer/>
//    </>
//   );
// }

const Links = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </>
);

const Home = props => <h1>Home</h1>;

const About = props => <h1>About</h1>;


export default function App() {
  return (
    <BrowserRouter>
      <Links />
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="moveToLeftFromRight"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
};