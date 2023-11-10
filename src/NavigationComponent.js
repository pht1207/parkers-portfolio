import './NavigationComponent.css'
import { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

import HiMyNameIs from './Pages/Home/HiMyNameIs';

import Projects from './Pages/Projects';
import AboutMe from './Pages/AboutMe';
import Home from './Pages/Home/Home';

function NavigationComponent(props) {

    return (
        <Router>
            <nav className="NavigationFlexBox">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" elements={<Projects />} />
                <Route path="/resume" element={<HiMyNameIs />} />
                {/* Other routes */}
            </Routes>
        </Router>
    );
    }
    
    export default NavigationComponent;