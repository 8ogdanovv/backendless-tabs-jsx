import { useContext } from 'react';
import { AppContext } from './AppContext';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import './App.css';

function App() {
  const {
    showFrame: showTaskFrame,
    showButton,
    setShowButton
  } = useContext(AppContext);

  let timeout;

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

  return (
    <div onMouseMove={handleMouseMove} className="app">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
