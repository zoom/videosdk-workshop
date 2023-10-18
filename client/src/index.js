import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ClientContext} from './Context/globalContext';
import ZoomVideo from '@zoom/videosdk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
        <App/>

  </React.StrictMode>
);
