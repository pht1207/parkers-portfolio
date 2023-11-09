import './NavigationComponent.css'
import { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavigationComponent(props) {

    return (
        <Router>
            <nav className="NavBar">
                <Link to="/">Home</Link>
                <Link to="/About">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Resume">Resume</Link>
            </nav>
        </Router>
    );
    }
    
    export default NavigationComponent;