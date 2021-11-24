import React, {useState} from 'react'

import { Route, BrowserRouter, Routes, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import {getCookie} from '../../Functions/Cookies.js'
import { SessionContext } from '../../Hooks/sessionContext';


import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Navbar from '../Navbar/Navbar';

import Group from '../Group/Group';
import Groups from '../Groups/Groups';
import PeriodGroups from '../PeriodGroups/PeriodGroups.js';
import StudentProfile from '../Profile/Profile';


import Periods from '../Periods/Periods';
import Missions from '../Missions/Missions';
import GradeStudent from '../GradeStudent/GradeStudent';
import EditStudentGrade from '../GradeStudent/EditStudentGrade'
import AddStudent from '../AddStudent/AddStudent';
import Subjects from '../Subjects/Subjects';
import PostMissionToGroup from '../Missions/PostMissionToGroup/PostMissionToGroup.js';
import GroupMissionInfo from '../Group/GroupMissions/GroupMissionItem/GroupMissionInfo/GroupMissionInfo.js';

import Create from '../Create/Create';
import Edit from '../Edit/Edit';


import ForgotPass from '../ForgotPass/ForgotPass';
import ValidateCode from '../ForgotPass/ValidateCode';
import ChangePass from '../ForgotPass/ChangePass';
import NotFound from '../NotFound/NotFound';



function MainAppRouter() {

    const [session, setSession] = useState(getCookie("session_token") || false);
    const [isTeacher, setTeacherStatus] = useState(getCookie("user")?.role?.name  ?? "student" === "teacher");
    const [username, setUsername] = useState(getCookie("user")?.username || "");
    const [userId, setUserId] = useState(getCookie("user")?.id || 0);

    return (
        <SessionContext.Provider value={{session, setSession, isTeacher, 
            setTeacherStatus, username, setUsername, userId, setUserId}}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/forgot" element={<ForgotPass/>}/>
                    <Route path="/validateRecoverCode" element={<ValidateCode/>}/>
                    <Route path="/setNewPassword" element={<ChangePass/>}/>
                    

                    {/* student routes */}
                    <Route path="/groups" element={<Groups/>}/>


                    {/* dynamic */}
                    <Route path="/Group/:id" element={<Group/>}/>
                    <Route path="/Group/:groupId/mission/:missionId" element={<GroupMissionInfo/>}/>


                    <Route path="/profile/:group/:id" element={<StudentProfile/>}/>
                    <Route path="/Group/:groupId/gradeMission/:missionId/enrollment/:enrollmentId" element={<GradeStudent/>}/> {/*TODO add right dynamic path*/}
                    <Route path="/Group/:groupID/editGradeMission/:missionId/enrollment/:enrollmentId" element={<EditStudentGrade/>}/> {/*TODO add right dynamic path*/}
                    <Route path="/create/:type" element={<Create/>}/>
                    <Route path="/edit/:type/:id" element={<Edit/>}/>

                    {/* teacher routes */}
                    <Route path="/periods" element={<Periods/>}/>
                    <Route path="/missions" element={<Missions/>}/>
                    <Route path="/postMissionToGroup/:id" element={<PostMissionToGroup/>}/>
                    <Route path="/addstudent" element={<AddStudent/>}/>
                    <Route path="/subjects" element={<Subjects/>}/>
                    <Route path="/periodGroups/:id" element={<PeriodGroups/>}/>

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
