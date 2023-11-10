import logo from './logo.svg';
import './App.css';
import HiMyNameIs from './HiMyNameIs';
import ProfilePic from './images/Me.jpg'
import ContactInfo from './ContactInfo'
import NavigationComponent from './NavigationComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationComponent/>

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
