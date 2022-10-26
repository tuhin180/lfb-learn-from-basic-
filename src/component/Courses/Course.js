import React from "react";
import { useLoaderData } from "react-router-dom";

const Course = () => {
  const courseData = useLoaderData();
  const { name } = courseData;
  console.log(courseData);
  return <div></div>;
};

export default Course;
