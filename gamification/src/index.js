import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Component imports
import Login from './Components/Login/Login';
import Group from './Components/Group/Group';
import Courses from './Components/Courses/Courses';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter forceRefresh={true}>
      <Switch>
          <Route path="/login"> 
            <Login />
          </Route>
          <Route path="/profile">
            <App/>
          </Route>
          <Route path="/group">
            <Group />
          </Route>
          <Route path="/courses">
            <Courses/>
          </Route>
          <Route path="/">
            <App/>
          </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
