import logo from './logo.svg';

import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Env', process.env);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SW TEST - Blank page edition</h1>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
