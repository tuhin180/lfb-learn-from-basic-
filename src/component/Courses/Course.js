import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const Course = () => {
  const courseData = useLoaderData();

  return (
    <div>
      <CourseCard data={courseData}></CourseCard>
    </div>
  );
};

export default Course;
