import logo from './logo.svg';
import './App.css';
import HiMyNameIs from './HiMyNameIs';
import TypingEffect from './TypingEffect';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HiMyNameIs/>
        <TypingEffect text="Hello, welcome to my portfolio!" speed={150} />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
