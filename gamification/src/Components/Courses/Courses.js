import React from "react";
import { getCookie } from "../../Functions/Cookies";
import Student from "./Dynamic/Student";
import Teacher from "./Dynamic/Teacher";
import "./Courses.css";


function Courses() {
  
  return (
    <div>
      {  getCookie("isTeacher") ?
        (<Student/>) :
        (<Teacher/>)
      }
    </div>
  );
}

export default Courses;
