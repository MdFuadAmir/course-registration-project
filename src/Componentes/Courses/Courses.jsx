import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({handleMarkAsRead,handleTotalPrice,handleTotalCradit,handleTotalRemainingHr}) => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                courses.map(course => <Course 
                    key={course.id} 
                    course={course} 
                    handleMarkAsRead={handleMarkAsRead} 
                    handleTotalPrice={handleTotalPrice}
                    handleTotalCradit={handleTotalCradit}
                    handleTotalRemainingHr={handleTotalRemainingHr}
                    ></Course> )
            }
        </div>
    );
};
Courses.propTypes ={
    handleMarkAsRead: PropTypes.func.isRequired,
    handleTotalPrice: PropTypes.func.isRequired,
    handleTotalCradit: PropTypes.func.isRequired,
    handleTotalRemainingHr: PropTypes.func.isRequired,
   
}
export default Courses;