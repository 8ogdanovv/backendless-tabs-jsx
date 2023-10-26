import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [showTaskFrame, setShowTaskFrame] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const handleMouseMove = () => {
    if (!showButton && !showTaskFrame) {
      setShowButton(true);
    } else {
      clearTimeout(timeout);
      setShowButton(true);
      const timeout = setTimeout(() => {
        setShowButton(false);
      }, 500);
    }
  };

  const handleButtonClick = () => {
    setShowTaskFrame(!showTaskFrame);
  };

  useEffect(() => {
    let timeout;
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
          id="myIframe"
          style={{
            height: showTaskFrame ? '35dvh' : '0',
            transition: 'height 0.5s',
          }}
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

      <main className="content">
        <section className="">some context</section>
      </main>

      <footer className="footer">
        <div className="read-the-docs">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
