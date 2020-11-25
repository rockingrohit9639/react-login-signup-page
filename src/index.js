import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from "./Login";
import Signup from "./Signup"
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
