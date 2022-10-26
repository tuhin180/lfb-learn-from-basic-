import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

import LeftsideNav from "./LeftsideNav";

const Courses = () => {
  const allCourses = useLoaderData();
  console.log(allCourses);
  return (
    <div className="grid grid-cols-12 mt-8">
      <div className="col-span-2 pl-4 ">
        <LeftsideNav></LeftsideNav>
      </div>

      <div className="col-span-10">
        <Outlet></Outlet>
        {allCourses.map((data) => (
          <CourseCard key={data.id} data={data}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
