import './NavigationComponent.css'
import { useEffect, useState } from 'react';

function NavigationComponent(props) {

    return (
        <nav className="NavBar">
            <a href='google.com'>Home</a>
            <a href='google.com'>About me</a>
            <a href='google.com'>Projects</a>
            <a href='google.com'>Resume</a>
        </nav>
    );
    }
    
    export default NavigationComponent;