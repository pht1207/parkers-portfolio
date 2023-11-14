import './AboutMe.css'
import { useEffect, useState, React } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


function AboutMe(props) {      

    return (
        <div className='AboutMe'>


            <div className='WhoIAm'>
                <h2>Who I Am</h2>
                <ul>
                    <li>I'm an information technology student who is about to graduate from UNT at Dallas.</li>
                    <li>My goal is to land a career in web development. I'd like to be a full stack developer.</li>
                    <li>I have experience in both frontend and backend programming, I enjoy both quite a bit. To me, the appeal has to be the reward of being able to see my finished useable product.</li>
                </ul>
            </div> 

            <div className='Divider'/>
            
            <div className='WhatIDo'>
                <h2>What I Do</h2>
                <ul>
                    <li>Outside of coding, I like kayaking and spending time outside with friends.</li>
                    <li>When I'm not doing that, I like to persue no-code computer projects, sometimes I do needless projects with electronics and I also play some video games.</li>
                    <li>I have a dog, her name is Patches, she is a rescue, she's a very good puppy :).</li>
                    <li></li>
                </ul>
            </div>


        </div>
    );
    }
    
    export default AboutMe;