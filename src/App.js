import logo from './logo.svg';
import './App.css';
import HiMyNameIs from './HiMyNameIs';
import ProfilePic from './images/Me.jpg'

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
          <img src={ProfilePic} className='ProfilePic'>
          </img>

        </div>

      </header>
    </div>
  );
}

export default App;
