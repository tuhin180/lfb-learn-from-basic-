import React from "react";
import { id, Link, useLoaderData } from "react-router-dom";

const DetailsComponent = () => {
  const details = useLoaderData();
  const {
    name,
    title,
    image,
    fee,
    teacher,
    duration,
    description,
    total_enrolled,
  } = details;
  console.log(details);
  return (
    <div className="mt-10">
      <div className=" mx-auto max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="object-cover w-full h-64" src={image} alt="Article" />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {name}
            </span>
            <Link
              href="#"
              className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabindex="0"
              role="link"
            >
              {title}
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>

          <div className="mt-4">
            <Link to={``}>
              <button className="btn-info p-2 rounded">Premium access</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
