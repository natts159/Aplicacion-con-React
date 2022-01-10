// este archivo index.js es super importante

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //esto afecta a todo el proyecto 
import App from './components/App';
import reportWebVitals from './reportWebVitals'; //mide el rendimiento real de la aplicación


ReactDOM.render(

    <App />, //renderiza este archivo  <=== qué redenrizo
 
  document.getElementById('root')//    <=== Donde lo renderizo 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
