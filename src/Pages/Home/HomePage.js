import './HomePage.css';
import HiMyNameIs from './HiMyNameIs';
import ContactInfo from './ContactInfo'
import DynamicText from '../../DynamicText';
import DynamicTextArray from '../../DynamicTextArray';
import React, { useEffect, useState } from 'react';


function Home() {
  const h1Element = <h1 className='HelloWorld'>Hello World</h1>
  const h2Element = <h2 className='HelloWorld'>Second Line Test</h2>
  const elementsArray = [
    React.createElement('h1', null, 'Hello World'),
    React.createElement('p', null, 'This is a paragraph'),
    // Add more elements as needed
  ];
  return (
        <div className='Opening'>
            <HiMyNameIs speed={100} html={
            <>
            </>
            }
            />
            <ContactInfo/>
            <DynamicText customElement={h1Element} elementArray={[h1Element, h1Element]}/>
            <DynamicTextArray elements={elementsArray}/>

        </div>
  );
}

export default Home;
