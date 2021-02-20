import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Color from './Color';
import {Route, Link, BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>

  <Route path="/" component={App}/>
  <Route path="/color" component={Color}/>

  </BrowserRouter>, document.getElementById('root')
);

// path หน้านี้บอกว่าถ้า path... ให้ไปเรียก component หน้า ...js นี้นะ

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
