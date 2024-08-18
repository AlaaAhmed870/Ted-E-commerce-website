import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '/src/Components/Pages/Products.css'
// import bootstrap and popper
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
// import browser router
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
      <App />
  </BrowserRouter>
</React.StrictMode>,
)