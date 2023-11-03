import logo from './logo.svg';
import './App.css';
import HiMyNameIs from './HiMyNameIs';
import ProfilePic from './images/Me.jpg'
import ContactInfo from './ContactInfo'

function App() {
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

export default App;
