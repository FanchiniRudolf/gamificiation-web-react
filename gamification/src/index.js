import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Component imports
import Login from './Components/Login/Login';

// Student-only components
import Courses from './Components/Courses/Courses';
import StudentGroup from './Components/StudentGroup/StudentGroup';

// Instructor-only components
import TeacherCourses from './Components/TeacherCourses/TeacherCourses';
import TeacherGroups from './Components/TeacherGroups/TeacherGroups';
import TeacherPeriods from './Components/TeacherPeriods/TeacherPeriods';
import TeacherMissions from './Components/TeacherMissions/TeacherMissions';
import TeacherGroup from './Components/TeacherGroup/TeacherGroup';
import Navbar from './Components/Navbar/Navbar';
import StudentProfile from './Components/StudentProfile/StudentProfile';
import GradeStudent from './Components/GradeStudent/GradeStudent';



ReactDOM.render(
  
  <React.StrictMode>
    <Navbar />
    <BrowserRouter forceRefresh={true}>
      <Switch>
          <Route path="/login"> 
            <Login />
          </Route>

          {/* student routes */}
          <Route path="/profile">
            <App/>
          </Route>
          <Route path="/courses">
            <Courses/>
          </Route>

          {/* dynamic */}
          <Route path="/studentgroup">
            <StudentGroup />
          </Route>
          <Route path="/studentprofile">
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

          {/* dinamicas, correcto?? */}
          <Route path="/teachergroup">
            <TeacherGroup />
          </Route>
          <Route path="/gradestudent">
            <GradeStudent />
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
