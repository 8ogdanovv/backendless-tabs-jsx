import reactLogo from './assets/react.svg';
import reactRouterLogo from './assets/react-router-mark-color.svg';
import './App.css';
import { useState, useEffect } from 'react';
import RouterComponent from './RouterComponent';

function App() {
  const [showTaskFrame, setShowTaskFrame] = useState(true);
  const [showButton, setShowButton] = useState(true);
  let timeout; // Declare the timeout variable

  const handleMouseMove = () => {
    if (!showButton && !showTaskFrame) {
      setShowButton(true);
    } else {
      clearTimeout(timeout);
      setShowButton(true);
      timeout = setTimeout(() => {
        setShowButton(false);
      }, 500);
    }
  };

  const handleButtonClick = () => {
    setShowTaskFrame(!showTaskFrame);
  };

  useEffect(() => {
    const mouseMoveHandler = () => {
      setShowButton(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowButton(false);
      }, 500);
    };
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, [showTaskFrame]);

  return (
    <div onMouseMove={handleMouseMove} className="app">
      <header
        className="header"
        style={{
          height: showTaskFrame ? '35dvh' : '0',
          transition: 'height 0.5s',
        }}
      >
        <iframe
          src="https://docs.google.com/document/d/1ZsCmCjY2tErDPjqsMOhoO8ctA0LHIVHhVnvXSBur0ts/edit"
          className="task-frame"
          style={{ height: showTaskFrame ? '35dvh' : '0' }}
        />
      </header>

      <button
        onClick={handleButtonClick}
        style={{
          height: '5dvh',
          opacity: showButton ? '1' : '0',
          transition: 'opacity 0.5s',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1dvh',
        }}
      >
        {showTaskFrame ? 'hide task frame\t' : 'show task frame\t'} 
        <span
          style={{
            display: 'inline-block',
            transition: 'transform 0.5s',
            transform: showTaskFrame ? 'rotate(180deg)' : '',
            fontSize: '2dvh',
            width: '2dvh',
            borderRadius: '50%',
          }}
        >
          V
        </span>
      </button>

      <main className='main'>
        <RouterComponent />
      </main>

      <footer className="footer">
        <div className="read-the-docs">
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
            <img src={reactRouterLogo} className="logo" alt="React-router logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
