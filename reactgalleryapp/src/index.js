import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

/* ReactDOM.render(
  <App />, 
  document.querySelector('.container')
);  */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);