import './HomePage.css';
import HiMyNameIs from './HiMyNameIs';
import ContactInfo from './ContactInfo'
import React, { useEffect, useState } from 'react';


function Home() {

  return (
        <div className='Opening'>
            <HiMyNameIs/>
            <ContactInfo/>
        </div>
  );
}

export default Home;
