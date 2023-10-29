import React from 'react';
import App from './App.jsx';
import './index.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL} >
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
);
