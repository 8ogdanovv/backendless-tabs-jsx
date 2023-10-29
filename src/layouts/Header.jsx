import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext';
import './Header.css';

export default function Header() {
  const {
    showFrame: showTaskFrame,
    setShowFrame: setShowTaskFrame,
    setIsLandscape, showButton
  } = useContext(AppContext);

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

  const handleButtonClick = () => {
    setShowTaskFrame(!showTaskFrame);
  };


  return (
    <>
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
        <div className='crafted-4'>
          <i>...crafted specially for</i>
          <br />
          <a href="https://backendless.com/" target="_blank" rel="noreferrer" className='company-link'>
            <img
              src="https://backendless.com/wp-content/themes/backendless/assets/images/logos/logo_white.svg"
              alt="backendless logo"
              className='company-logo onBlack'
            />
            <img
              src="https://backendless.com/wp-content/themes/backendless/assets/images/logos/logo.svg"
              alt="backendless logo"
              className='company-logo onWhite'
            />
          </a>
        </div>
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
    </>
  )
}
