import React from "react";
import { useLoaderData } from "react-router-dom";

const Course = () => {
  const courseData = useLoaderData();
  const { name } = courseData;
  console.log(courseData);
  return (
    <div>
      <h1>kuk</h1>
    </div>
  );
};

export default Course;
