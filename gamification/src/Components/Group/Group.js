import React from "react";
import { getCookie } from "../../Functions/Cookies";
import Student from "./Dynamic/Student";
import Teacher from "./Dynamic/Teacher";
import "./Group.css";


function Courses() {
  //TODO give components group id from route
  //TODO put on top reused components
  return (
    <div>
      {  getCookie("isTeacher") ?
        (<Teacher/>) :
        (<Teacher/>)
        // (<Student/>)
      }
    </div>
  );
}

export default Courses;
