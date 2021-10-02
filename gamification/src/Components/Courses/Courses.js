import React from "react";
import { getCookie } from "../../Functions/Cookies";
import Student from "./Dynamic/Student";
import Teacher from "./Dynamic/Teacher";
import "./Courses.css";


function Courses() {
  //TODO put on top reused components

  return (
    <div>
      {  getCookie("isTeacher") ?
        (<Teacher/>) :
        (<Student/>)
      }
    </div>
  );
}

export default Courses;
