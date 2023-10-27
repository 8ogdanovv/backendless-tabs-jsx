import reactLogo from './assets/react.svg';
import reactRouterLogo from './assets/react-router-mark-color.svg';
import MUILogo from './assets/MUI-logo.svg';
import './App.css';
import { useState, useEffect, useContext } from 'react';
import RouterComponent from './RouterComponent';
import { AppContext } from './AppContext';

function App() {
  const { showFrame: showTaskFrame, setShowFrame: setShowTaskFrame } = useContext(AppContext);
  // const [showTaskFrame, setShowTaskFrame] = useState(true);
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
      }, 1000);
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
      }, 1000);
    };
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, [showTaskFrame]);

  return (
    <div onMouseMove={handleMouseMove} className="app">
      <header
        className="header"
        style={{ height: showTaskFrame ? '35dvh' : '0' }}
      >
        <iframe
          src="https://docs.google.com/document/d/1ZsCmCjY2tErDPjqsMOhoO8ctA0LHIVHhVnvXSBur0ts/edit"
          className="task-frame"
          style={{ height: showTaskFrame ? '35dvh' : '0' }}
        />
      </header>
      <section className='header-button-title'>
        <button
          onClick={handleButtonClick}
          className='header-button'
          style={{ opacity: showButton ? '1' : '0' }}
        >
          {showTaskFrame ? 'hide task frame\t' : 'show task frame\t'} 
          <span
            className='header-button-span'
            style={{ transform: showTaskFrame ? 'rotate(180deg)' : '' }}
          >
            V
          </span>
        </button>

        <h1
          className='header-title'
          style={{ opacity: !showButton ? '1' : '0' }}
        >
          React | React-router | MUI | tabs:
        </h1>
      </section>

      <main className='main'>

          <RouterComponent />

      </main>

      <footer className="footer">
        <div className="read-the-docs">
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
            <img src={reactRouterLogo} className="logo router" alt="React-router logo" />
          </a>
          <a href="https://mui.com/" target="_blank" rel="noreferrer">
            <img src={MUILogo} className="logo mui" alt="MUI logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
