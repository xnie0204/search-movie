import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


