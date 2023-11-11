import './HomePage.css';
import HiMyNameIs from './HiMyNameIs';
import ContactInfo from './ContactInfo'


function Home() {
  return (
    <div className="Home">

        <div className='Opening'>
          <HiMyNameIs speed={100} html={
          <>
          </>
          }
          />
          <ContactInfo/>
        </div>

    </div>
  );
}

export default Home;
