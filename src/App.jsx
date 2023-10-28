import reactLogo from './assets/react.svg';
import reactRouterLogo from './assets/react-router-mark-color.svg';
import MUILogo from './assets/MUI-logo.svg';
import './App.css';
import { useState, useEffect, useContext } from 'react';
import RouterComponent from './RouterComponent';
import { AppContext } from './AppContext';

function App() {
  const {
    showFrame: showTaskFrame,
    setShowFrame: setShowTaskFrame,
    setIsLandscape
  } = useContext(AppContext);
  const [showButton, setShowButton] = useState(true);

  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const isPositionLandScape = () => {
    return windowDimensions.width > windowDimensions.height;
  };

  const updateWindowDimensions = () => {
    setWindowDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    setIsLandscape(isPositionLandScape());
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

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
        style={{ height: showTaskFrame ? '33dvh' : '0' }}
      >
        <iframe
          src="https://docs.google.com/document/d/1ZsCmCjY2tErDPjqsMOhoO8ctA0LHIVHhVnvXSBur0ts/edit"
          className="task-frame"
          style={{ height: showTaskFrame ? '33dvh' : '0' }}
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
          <section className='footer-toolkit'>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
              <img src={reactRouterLogo} className="logo router" alt="React-router logo" />
            </a>
            <a href="https://mui.com/" target="_blank" rel="noreferrer">
              <img src={MUILogo} className="logo mui" alt="MUI logo" />
            </a>
          </section>
          <p>
            Click on the React, React-router and MUI logos to learn more
          </p>
        </div>

       <div className='footer-contacts'>


        <section className='footer-links'>
          <a href="https://www.facebook.com/vadym4che/" target="_blank" rel="noreferrer" className="link-image">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 19.5" xmlSpace="preserve"><path d="M14.3 19.5h-9c-2.9 0-5.2-2.4-5.2-5.2v-9C0 2.4 2.4 0 5.2 0h9c2.9 0 5.2 2.4 5.2 5.2v9c.1 2.9-2.3 5.3-5.1 5.3zm-9.1-18c-2.1 0-3.8 1.7-3.8 3.8v9c0 2.1 1.7 3.7 3.7 3.7h9c2.1 0 3.7-1.7 3.7-3.7v-9c0-2.1-1.7-3.7-3.7-3.7H5.2z"></path><path className="st0" d="M14.2 11.4H8.8c-.4 0-.8-.3-.8-.8 0-.4.3-.8.8-.8h5.4c.4 0 .8.3.8.8s-.3.8-.8.8z"></path><path className="st0" d="M10.7 19.5c-.4 0-.8-.3-.8-.8V8.8c0-1.9 1.5-3.4 3.4-3.4h.9c.4 0 .8.3.8.8s-.3.8-.8.8h-.9c-1.1 0-1.9.9-1.9 1.9v9.9c0 .4-.3.7-.7.7z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/vadym4che/" target="_blank" rel="noreferrer"
          className="link-image" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 19.5" xmlSpace="preserve"><path d="M14.3 19.5h-9c-2.9 0-5.2-2.4-5.2-5.2v-9C0 2.4 2.4 0 5.2 0h9c2.9 0 5.2 2.4 5.2 5.2v9c.1 2.9-2.3 5.3-5.1 5.3zm-9.1-18c-2.1 0-3.8 1.7-3.8 3.8v9c0 2.1 1.7 3.7 3.7 3.7h9c2.1 0 3.7-1.7 3.7-3.7v-9c0-2.1-1.7-3.7-3.7-3.7H5.2z"></path><path className="st0" d="M5.9 15c-.4 0-.8-.3-.8-.8V8.9c0-.4.3-.8.8-.8s.8.3.8.8v5.4c-.1.4-.4.7-.8.7zM14 15c-.4 0-.8-.3-.8-.8v-3.1c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v3.1c0 .4-.3.8-.8.8s-.8-.3-.8-.8v-3.1c0-1.7 1.3-3 3-3s3 1.3 3 3v3.1c.1.5-.2.8-.6.8zM5.9 6.8c-.5 0-1-.4-1-1 0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.5 0 1 .4 1 1s-.5 1-1 1zm0-1.5c-.3 0-.5.2-.5.5 0 .4.6.7.9.4.1-.1.2-.2.2-.4-.1-.3-.3-.5-.6-.5z"></path></svg>
          </a>
          <a href="https://github.com/vadym4che" target="_blank" rel="noreferrer" className="link-image">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 19.5" xmlSpace="preserve"><path d="M14.3 19.5h-1.5c-.4 0-.8-.3-.8-.8v-1s0-1.4-.8-2.6c-.1-.2-.2-.5 0-.7.1-.2.4-.4.6-.4 1.7-.1 2.9-1.6 2.9-3.4 0-.6-.2-1.1-.6-1.7-.1-.2-.1-.3-.1-.5l-.1-1.9-2 .8c-.1.1-.3.1-.4 0-1.2-.3-2.3-.3-3.4 0h-.4l-2.1-.8v1.9c0 .2-.1.3-.2.5-.4.5-.6 1.1-.6 1.7 0 1.8 1.3 3.3 2.9 3.4.3 0 .5.2.6.4.1.2.1.5 0 .7-.8 1.2-.8 2.6-.8 2.6v1c0 .4-.3.8-.8.8H5.2c-2.9 0-5.2-2.4-5.2-5.2v-9C0 2.4 2.4 0 5.2 0h9c2.9 0 5.2 2.4 5.2 5.2v9c.1 2.9-2.3 5.3-5.1 5.3zm-.8-1.5h.8c2.1 0 3.7-1.7 3.7-3.7v-9c0-2.1-1.7-3.7-3.7-3.7h-9c-2.1 0-3.8 1.7-3.8 3.8v9c0 2.1 1.7 3.7 3.7 3.7H6v-.3c0-.1 0-1.2.5-2.5-1.9-.6-3.3-2.5-3.3-4.7 0-.8.3-1.7.8-2.4V6.5c0-.5.3-.9.6-1.2.5-.3 1-.4 1.5-.2l1.9.7c1.2-.3 2.5-.3 3.6 0l1.9-.7c.4-.2.9-.1 1.3.2.4.3.6.7.6 1.2v1.7c.5.7.8 1.6.8 2.4 0 2.2-1.4 4.1-3.3 4.7.5 1.2.5 2.4.5 2.5v.2z"></path></svg>
          </a>
        </section>

        <p>
          &copy; 2023 Vadym Chervoniak @vadym4che https://bit.ly/Ful1-5tack
        </p>
       </div>
      </footer>
    </div>
  );
}

export default App;
