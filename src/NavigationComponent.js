import './NavigationComponent.css'
import { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

import App from './App';
import HiMyNameIs from './HiMyNameIs';

import ContactInfo from './ContactInfo'
import Projects from './Pages/Projects';
import AboutMe from './Pages/AboutMe';

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
                <Route path="/" element={<></>} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" elements={<Projects />} />
                <Route path="/resume" element={<HiMyNameIs />} />
                {/* Other routes */}
            </Routes>
        </Router>
    );
    }
    
    export default NavigationComponent;