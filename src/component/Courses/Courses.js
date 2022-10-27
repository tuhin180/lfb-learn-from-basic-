import React from "react";
import { Outlet } from "react-router-dom";

import LeftsideNav from "./LeftsideNav";

const Courses = () => {
  return (
    <div className="grid grid-cols-12 mt-8">
      <div className="col-span-2 pl-4 ">
        <LeftsideNav></LeftsideNav>
      </div>

      <div className="col-span-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Courses;
