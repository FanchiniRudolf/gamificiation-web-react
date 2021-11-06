import React, {useState} from 'react'

import { Route, BrowserRouter, Routes, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import {getCookie} from '../../Functions/Cookies.js'
import { SessionContext } from '../../Hooks/sessionContext';

// Component imports
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';

import Group from '../Group/Group';

// Student-only components
import Groups from '../Groups/Groups';
import StudentProfile from '../Profile/Profile';

// Instructor-only components
import Periods from '../Periods/Periods';
import Missions from '../Missions/Missions';
import GradeStudent from '../GradeStudent/GradeStudent';
import AddStudent from '../AddStudent/AddStudent';
import Subjects from '../Subjects/Subjects';

import Create from '../Create/Create';
import Edit from '../Edit/Edit';
import Signup from '../Signup/Signup';
import ForgotPass from '../ForgotPass/ForgotPass';
import NotFound from '../NotFound/NotFound';



function MainAppRouter() {

    const [session, setSession] = useState(getCookie("session_token") || false);
    const [isTeacher, setTeacherStatus] = useState(getCookie("user").role.name === "teacher");
    const [username, setUsername] = useState(getCookie("user").username || "");
    const [userId, setUserId] = useState(getCookie("user").id || 0);

    return (
        <SessionContext.Provider value={{session, setSession, isTeacher, 
            setTeacherStatus, username, setUsername, userId, setUserId}}>
            <BrowserRouter>
                <Navbar />
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
        </SessionContext.Provider>
    );

}
export default MainAppRouter;
