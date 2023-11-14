import './HomePage.css';
import HiMyNameIs from './HiMyNameIs';
import ContactInfo from './ContactInfo'
import DynamicallyLoadedText from './DynamicallyLoadedText'


function Home() {
  return (
        <div className='Opening'>
            <HiMyNameIs speed={100} html={
            <>
            </>
            }
            />
            <ContactInfo/>
            <DynamicallyLoadedText inputText="test"/>
        </div>
  );
}

export default Home;
