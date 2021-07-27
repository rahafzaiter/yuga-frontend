import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './Tutorial/components/Clock'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function tick(){
ReactDOM.render(
  <BrowserRouter>
  <App />
 
  </BrowserRouter>,
  document.getElementById('root')
);
}
setInterval(tick, 1000);

//serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
