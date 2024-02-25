import logo from './papo.gif';
import './App.css';

const React = require('react');

/**
 * The page.
 * @return {HTMLCollection}
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rat spin
        </p>
        <a
          className="App-link"
          href="https://github.com/nitsuboy"
          target="_blank"
          rel="noopener noreferrer"
        >
          my profile
        </a>
      </header>
    </div>
  );
}

export default App;
