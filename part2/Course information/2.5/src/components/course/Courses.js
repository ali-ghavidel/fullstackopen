import React from "react";
import Course from "./Course";

const Courses = ({courses}) => {
return(
    courses.map(e => <Course key={e.id} course={e} />)
)
}
export default Courses;