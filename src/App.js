import logo from './logo.svg';
import './App.css';
import HiMyNameIs from './HiMyNameIs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HiMyNameIs speed={100} html={
        <>
          <p>Hi, my name is</p>
          <h1>Parker Throneberry</h1>
        </>
        }
        />

      </header>
    </div>
  );
}

export default App;
