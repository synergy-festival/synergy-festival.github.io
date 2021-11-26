import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


WebFont.load({
    google: {
        families: ['Noto+Sans+TC|Roboto+Mono|Work+Sans:400,700', 'Work Sans']
    }
}); 




ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
