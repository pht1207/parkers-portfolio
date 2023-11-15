import './HomePage.css';
import HiMyNameIs from './HiMyNameIs';
import ContactInfo from './ContactInfo'
import DynamicallyLoadedText from './DynamicallyLoadedText'


function Home() {
  const h1Element = <h1>Hello World</h1>
  return (
        <div className='Opening'>
            <HiMyNameIs speed={100} html={
            <>
            </>
            }
            />
            <ContactInfo/>
            <DynamicallyLoadedText customElement={h1Element}/>
        </div>
  );
}

export default Home;
