import './AboutMe.css'
import { useEffect, useState, React } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


function AboutMe(props) {      

    return (
        <div className='AboutMe'>


            <div className='WhoIAm'>
                <h2>Who I Am</h2>
                <p>I'm an information technology student who is about to graduate from UNT at Dallas.</p>
            </div>
            <div className='Divider'/>
            <div className='WhatIDo'>
                    <h2>What I Do</h2>
                    <p>I'm an information technology student who is about to graduate from UNT at Dallas.</p>
                    <p>I'm an information technology student who is about to graduate from UNT at Dallas.</p>
                    <p>I'm an information technology student who is about to graduate from UNT at Dallas.</p>
                    <p>I'm an information technology student who is about to graduate from UNT at Dallas.</p>
                    <p>I'm an information technology student who is about to graduate from UNT at Dallas.</p>
                    <p>I'm an information technology student who is about to graduate from UNT at Dallas.</p>
                    <p>I'm an information technology student who is about to graduate from UNT at Dallas.</p>
                    <p>I'm an information technology student who is about to graduate from UNT at Dallas.</p>
            </div>


        </div>
    );
    }
    
    export default AboutMe;