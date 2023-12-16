import './AboutMe.css'
import { useEffect, useState, React } from 'react';
import ContactInfo from '../Home/ContactInfo'


function AboutMe(props) {      

    return (
        <div className='AboutMePage'>
            <div className='AboutMeSections'>


                <div className='WhoIAm'>
                    <h2>Who I Am</h2>
                    <ul>
                        <li>I am an information technology student preparing to graduate from UNT at Dallas in the Spring of 2024 with a bachelor's degree.</li>
                        <li>My current goal is to start my career in web development. I have practical experience with both front-end and back-end development, using React and Node.js.</li>
                    </ul>
                </div> 

                <div className='Divider'/>
                
                <div className='WhatIDo'>
                    <h2>What I Do</h2>
                    <ul>
                        <li>Beyond coding, my hobbies include kayaking, spending time with friends and family, and I also enjoy playing games.</li>
                        <li>I also enjoy pursuing no-code computer projects with Linux servers that I manage which allows me to expand my technical skills and expertise.</li>
                    </ul>
                </div>

            </div>
            <ContactInfo/>
        </div>
    );
    }
    
    export default AboutMe;