import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ data }) => {
  // "id": "04",
  // "name": "C#",
  // "title": "C# beginner to expert ",
  // "image": "https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  // "description": "This C#.NET training teaches non-experienced people how to create the Solutions/Applications using C#.NET.  C#.NET is Microsoft’s entry into the world of managed programming. Using a syntax that is deliberately from Java, C++ and C, C#.NET achieves a natural trade-off of terseness and clarity,  enabling programmers to express concepts in a clear and maintainable form. The recent enhancements to the language have made it even more powerful than before, allowing programmers to work with C#.NET in both an Object-Oriented and partially functional style.",
  // "teacher": "Jhonkar vai",
  // "duration": "9 months",
  // "fee": "25000",
  // "total_enrolled": "9000"
  const { id, name, title, image, fee } = data;
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={{
            backgroundImage: ` url(${image})`,
          }}
        ></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {name}
          </h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">
              {fee}৳
            </span>
            <Link to={`/course/${id}`}>
              <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
