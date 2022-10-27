import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const AllCourses = () => {
  const allData = useRouteLoaderData("allCourses");

  return (
    <div className="grid md:grid-cols-3 grid-cols-1  gap-4">
      {allData.map((data) => (
        <CourseCard key={data.id} data={data}></CourseCard>
      ))}
    </div>
  );
};

export default AllCourses;
