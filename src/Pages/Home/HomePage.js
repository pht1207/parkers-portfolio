import './HomePage.css';
import OpeningText from './OpeningText';
import ContactInfo from './ContactInfo'
import React, { useEffect, useState } from 'react';


function Home() {

  return (
        <div className='Opening'>
            <OpeningText/>
            <ContactInfo/>
        </div>
  );
}

export default Home;
