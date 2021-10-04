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
import Courses from './Components/Courses/Courses';
import StudentProfile from './Components/Profile/Profile';

// Instructor-only components
import TeacherPeriods from './Components/TeacherPeriods/TeacherPeriods';
import TeacherMissions from './Components/TeacherMissions/TeacherMissions';
import GradeStudent from './Components/GradeStudent/GradeStudent';
import AddStudent from './Components/AddStudent/AddStudent';
import TeacherGroups from './Components/TeacherGroups/TeacherGroups';

import Create from './Components/Create/Create';
import Edit from './Components/Edit/Edit';



ReactDOM.render(
  
  <React.StrictMode>
    <Navbar />
    <BrowserRouter forceRefresh={false}>
      <Switch>
          <Route path="/login"> 
            <Login />
          </Route>

          {/* student routes */}
          <Route path="/courses">
            <Courses/>
          </Route>

          {/* dynamic */}
          <Route path="/Group/:id">
            <Group />
          </Route>
          <Route path="/profile/:group/:id">
            <StudentProfile />
          </Route>
          <Route path="/gradestudent/:id">
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
            <TeacherPeriods />
          </Route>
          <Route path="/missions">
            <TeacherMissions />
          </Route>
          <Route path="/addstudent">
            <AddStudent />
          </Route>
          <Route path="/teachersubjects">
            <TeacherGroups />
          </Route>          

          <Route path="/">
            {getCookie("loggedIn") ? 
              (<Courses/>) :
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
