import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const LeftsideNav = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://lfc-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="bg-gray-900 text-white p-4 rounded">
      <h1 className="text-xl pb-4">All courses</h1>
      {courses.map((course) => (
        <p className="m-2 " key={course.id}>
          <Link to={`/courses/${course.id}`}>{course.name}</Link>
        </p>
      ))}
      <p className="m-2">
        <Link to={`/courses/all`}>All</Link>
      </p>
    </div>
  );
};

export default LeftsideNav;
