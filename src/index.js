import React from 'react';
import './css/styles.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import $ from 'jquery';
import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);