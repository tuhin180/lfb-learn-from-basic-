import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const LeftsideNav = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl pb-4">All courses</h1>
      {courses.map((course) => (
        <p className="m-2" key={course.id}>
          <Link to={`/courses/${course.id}`}>{course.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftsideNav;
