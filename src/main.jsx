import React from 'react';
import App from './App.jsx';
import './index.css';

import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Import HashRouter
import { AppProvider } from './AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <HashRouter basename={import.meta.env.BASE_URL} > {/* Use HashRouter instead */}
        <App />
      </HashRouter>
    </AppProvider>
  </React.StrictMode>,
);
