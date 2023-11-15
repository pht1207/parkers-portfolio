import './HomePage.css';
import HiMyNameIs from './HiMyNameIs';
import ContactInfo from './ContactInfo'
import DynamicText from '../../DynamicText';


function Home() {
  const h1Element = <h1 className='HelloWorld'>Hello World</h1>
  return (
        <div className='Opening'>
            <HiMyNameIs speed={100} html={
            <>
            </>
            }
            />
            <ContactInfo/>
            <DynamicText customElement={h1Element} elementArray={[h1Element, h1Element]}/>
        </div>
  );
}

export default Home;
