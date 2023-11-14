import './NavigationComponent.css'
import { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";


import ProjectsPage from './Pages/Projects/ProjectsPage';
import AboutMePage from './Pages/AboutMe/AboutMePage';
import HomePage from './Pages/Home/HomePage';

function NavigationComponent(props) {

    return (
        <Router>
            <nav className="NavigationFlexBox">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About Me</Link>
                {/*<Link to="/resume">Resume</Link>*/}
            </nav>
            
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/about" element={<AboutMePage />} />
                {/*<Route path="/resume" element={<HiMyNameIs />} />*/}
                {/* Other routes */}
            </Routes>
        </Router>
    );
    }
    
    export default NavigationComponent;