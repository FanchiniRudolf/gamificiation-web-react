import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes, Navigate} from "react-router-dom";
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
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgotpass" element={<ForgotPass/>}/>
          <Route path="/signup" element={<Signup/>}/>

          {/* student routes */}
          <Route path="/groups" element={<Groups/>}/>


          {/* dynamic */}
          <Route path="/Group/:id" element={<Group/>}/>
          <Route path="/profile/:group/:id" element={<StudentProfile/>}/>
          <Route path="/gradestudent/:group/:id" element={<GradeStudent/>}/>
          <Route path="/create/:type" element={<Create/>}/>
          <Route path="/edit/:type/:id" element={<Edit/>}/>

          {/* teacher routes */}
          <Route path="/periods" element={<Periods/>}/>
          <Route path="/missions" element={<Missions/>}/>
          <Route path="/addstudent" element={<AddStudent/>}/>
          <Route path="/subjects" element={<Subjects/>}/>

          {/* generic routes */}
          <Route exact path="/" element={getCookie("session_token") ?
              (<Navigate to="groups" replace={true} />) :
              (<Navigate to="login" replace={true} />)
            }/>

          <Route path="*" element={getCookie("session_token") ?
              (<NotFound />) :
              (<Login />)
            }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
