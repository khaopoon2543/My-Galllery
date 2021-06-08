import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import App from './App';
import Color from './path/Color';
import Home from './path/Home';
import Line from './path/Line';
import Status from './path/ReactTabletop';
import Commission from './path/Commission';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/color" exact component={Color}/>
    <Route path="/line" exact component={Line}/>
    <Route path="/commission" exact component={Commission}/>
  </Switch>
  </BrowserRouter>, document.getElementById('root')
);

// path หน้านี้บอกว่าถ้า path... ให้ไปเรียก component หน้า ...js นี้นะ

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
