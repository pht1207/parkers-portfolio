import './Home.css';
import HiMyNameIs from './HiMyNameIs';
import ContactInfo from './ContactInfo'


function Home() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='Opening'>
          <HiMyNameIs speed={100} html={
          <>
          </>
          }
          />
          <ContactInfo/>
        </div>

      </header>
    </div>
  );
}

export default Home;
