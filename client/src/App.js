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

// const Links = () => (
//   <>
//     <Link to="/">Home</Link>
//     <Link to="/projects">About</Link>
//   </>
// );

const Home = props => <Header/>;

const About = props => <Projects/>;


export default function App() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              // PROPS FROM THE PACKAGE FOLLOW CODE PEN FOR PROPS
              preset="pushTopPullBottom"
              enterAnimation="moveFromBottom"
              exitAnimation="moveToTop"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={About} />
                <Route component={Home}/>
              </Switch>
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
};