// AppContext.js
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showFrame, setShowFrame] = useState(false);
  const [isLandscape, setIsLandscape] = useState(true);

  return (
    <AppContext.Provider value={{ showFrame, setShowFrame, isLandscape, setIsLandscape }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};