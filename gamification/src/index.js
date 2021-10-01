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
import TeacherCourses from './Components/TeacherCourses/TeacherCourses';
import TeacherGroups from './Components/TeacherGroups/TeacherGroups';
import TeacherPeriods from './Components/TeacherPeriods/TeacherPeriods';
import TeacherMissions from './Components/TeacherMissions/TeacherMissions';
import TeacherGroup from './Components/TeacherGroup/TeacherGroup';
import GradeStudent from './Components/GradeStudent/GradeStudent';
import AddStudent from './Components/AddStudent/AddStudent';
import CreateCourse from './Components/CreateCourse/CreateCourse';
import CreateGroup from './Components/CreateGroup/CreateGroup';
import CreatePeriod from './Components/CreatePeriod/CreatePeriod';
import CreateMission from './Components/CreateMission/CreateMission'; //TODO collapse all into one
import EditCourse from './Components/EditCourse/EditCourse';
import EditGroup from './Components/EditGroup/EditGroup';
import EditPeriod from './Components/EditPeriod/EditPeriod';
import EditMission from './Components/EditMission/EditMission'; //TODO collapse all into one



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
          <Route path="/teachercourses">
            <TeacherCourses />
          </Route>
          <Route path="/teachergroups">
            <TeacherGroups />
          </Route>
          <Route path="/teacherperiods">
            <TeacherPeriods />
          </Route>
          <Route path="/teachermissions">
            <TeacherMissions />
          </Route>

          <Route path="/createcourse" /* rudy */>
            <CreateCourse />
          </Route>
          <Route path="/creategroup" /* rudy */>
            <CreateGroup />
          </Route>
          <Route path="/createperiod"/* rudy */>
            <CreatePeriod />
          </Route>
          <Route path="/createmission"/* rudy */>
            <CreateMission />
          </Route>
          <Route path="/editcourse">
            <EditCourse />
          </Route>
          <Route path="/editgroup">
            <EditGroup />
          </Route>
          <Route path="/editperiod">
            <EditPeriod />
          </Route>
          <Route path="/editmission">
            <EditMission />
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
