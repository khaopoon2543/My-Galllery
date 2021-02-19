import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './Home';
import {Route, Link, BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>

  <Route path="/" component={App}/>
  <Route path="/home" component={Home}/>

  </BrowserRouter>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
