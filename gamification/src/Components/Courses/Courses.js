import React from "react";
import { getCookie } from "../../Functions/Cookies";
import Student from "./Dynamic/Student";
import Teacher from "./Dynamic/Teacher";
import CourseCard from "../CourseCard/CourseCard";
import "./Courses.css";


function Courses() {
  //TODO put on top reused components

  const dummyCourses = [
    {
      id: 1,
      name: "Fundamentos de programación"
    },
    {
      id: 2,
      name: "Calidad y pruebas de SW"
    }
  ];
  const dummyCoursesList = dummyCourses.map(courseInfo => <CourseCard key={courseInfo.id} course={courseInfo} />)

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
