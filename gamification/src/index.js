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

// Student-only components
import Courses from './Components/Courses/Courses';
import StudentGroup from './Components/StudentGroup/StudentGroup';
import StudentProfile from './Components/Profile/Profile';

// Instructor-only components
import TeacherGroups from './Components/TeacherGroups/TeacherGroups';
import TeacherPeriods from './Components/TeacherPeriods/TeacherPeriods';
import TeacherMissions from './Components/TeacherMissions/TeacherMissions';
import TeacherGroup from './Components/TeacherGroup/TeacherGroup';
import GradeStudent from './Components/GradeStudent/GradeStudent';
import AddStudent from './Components/AddStudent/AddStudent';

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
          <Route path="/studentgroup/:id">
            <StudentGroup />
          </Route>
          <Route path="/profile/:id">
            <StudentProfile />
          </Route>


          {/* teacher routes */}
          <Route path="/teachergroups">
            <TeacherGroups />
          </Route>
          <Route path="/teacherperiods">
            <TeacherPeriods />
          </Route>
          <Route path="/teachermissions">
            <TeacherMissions />
          </Route>

          <Route path="/create/:type" /* rudy */>
            <Create />
          </Route>
          <Route path="/edit/:type/:id">
            <Edit />
          </Route>
          


          {/* dinamicas, correcto?? */}
          <Route path="/teachergroup">
            <TeacherGroup />
          </Route>
          <Route path="/gradestudent">
            <GradeStudent />
          </Route>

          <Route path="/addstudent">
            <AddStudent />
          </Route>

          <Route path="/">
            {getCookie("loggedIn") ? 
              (getCookie("isTeacher") ?
                (<Courses/>) :
                (<StudentGroup/>) //TODO this should be rolled into one 
              ) :
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
