import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const AllCourses = () => {
  const allData = useRouteLoaderData("allCourses");

  return (
    <>
      {allData.map((data) => (
        <CourseCard key={data.id} data={data}></CourseCard>
      ))}
    </>
  );
};

export default AllCourses;
