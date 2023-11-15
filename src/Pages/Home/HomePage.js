import './HomePage.css';
import HiMyNameIs from './HiMyNameIs';
import ContactInfo from './ContactInfo'
import DynamicText from '../../DynamicText';
import DynamicTextArray from '../../DynamicTextArray';


function Home() {
  const h1Element = <h1 className='HelloWorld'>Hello World</h1>
  const h2Element = <h2 className='HelloWorld'>Second Line Test</h2>

  return (
        <div className='Opening'>
            <HiMyNameIs speed={100} html={
            <>
            </>
            }
            />
            <ContactInfo/>
            <DynamicText customElement={h1Element} elementArray={[h1Element, h1Element]}/>
            <DynamicTextArray elementArray={[h1Element, h2Element]}/>

        </div>
  );
}

export default Home;
