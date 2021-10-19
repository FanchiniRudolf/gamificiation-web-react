import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import {getCookie} from './Functions/Cookies.js'

// Component imports
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';

import Group from './Components/Group/Group';

// Student-only components
import Groups from './Components/Groups/Groups';
import StudentProfile from './Components/Profile/Profile';

// Instructor-only components
import Periods from './Components/Periods/Periods';
import Missions from './Components/Missions/Missions';
import GradeStudent from './Components/GradeStudent/GradeStudent';
import AddStudent from './Components/AddStudent/AddStudent';
import Subjects from './Components/Subjects/Subjects';

import Create from './Components/Create/Create';
import Edit from './Components/Edit/Edit';
import Signup from './Components/Signup/Signup';
import ForgotPass from './Components/ForgotPass/ForgotPass';
import NotFound from './Components/NotFound/NotFound';



ReactDOM.render(

  <React.StrictMode>
    <Navbar />
    <BrowserRouter forceRefresh={false}>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgotpass">
            <ForgotPass />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          {/* student routes */}
          <Route path="/groups">
            <Groups/>
          </Route>

          {/* dynamic */}
          <Route path="/Group/:id">
            <Group />
          </Route>
          <Route path="/profile/:group/:id">
            <StudentProfile />
          </Route>
          <Route path="/gradestudent/:group/:id">
            <GradeStudent />
          </Route>
          <Route path="/create/:type">
            <Create />
          </Route>
          <Route path="/edit/:type/:id">
            <Edit />
          </Route>

          {/* teacher routes */}
          <Route path="/periods">
            <Periods />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/addstudent">
            <AddStudent />
          </Route>
          <Route path="/subjects">
            <Subjects />
          </Route>

          <Route exact path="/">
            {getCookie("loggedIn") ?
              (<Groups />) :
              (<Login />)
            }
          </Route>

          <Route path="*">
            {getCookie("loggedIn") ?
              (<NotFound />) :
              (<Login />)
            }
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
