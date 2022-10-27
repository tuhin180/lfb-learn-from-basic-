import React from "react";
import { FaUserTie, FaClock, FaRegCheckCircle } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const DetailsComponent = () => {
  const details = useLoaderData();
  const {
    id,
    name,
    title,
    image,
    teacher,
    duration,
    description,
    total_enrolled,
  } = details;
  console.log(details);
  return (
    <div className="mt-10 text-center ">
      <Pdf targetRef={ref} filename={`${name}.pdf`}>
        {({ toPdf }) => (
          <button className="btn" onClick={toPdf}>
            Generate Pdf
          </button>
        )}
      </Pdf>
      <div
        ref={ref}
        className=" mx-auto max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
      >
        <img className="object-cover w-full h-64" src={image} alt="Article" />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {name}
            </span>
            <Link
              href="#"
              className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex="0"
              role="link"
            >
              {title}
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div>
            <div>
              <h1 className="text-white">
                <span className="text-lime-500 flex gap-1">
                  <FaUserTie className="h-5 text-emerald-200" />

                  {teacher}
                </span>
              </h1>
            </div>
            <div>
              <p className="text-white flex gap-1">
                <FaClock className="text h-7" /> :
                <span className="text-lime-500">{duration}</span>
              </p>
            </div>
            <div>
              <p className="text-white flex gap-1">
                <FaRegCheckCircle className="text h-7" /> :
                <span className="text-lime-500">{total_enrolled}</span>
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Link to={`/premium-access/${id}`}>
              <button className="btn-info p-2 rounded focus:outline-none focus:ring focus:border-blue-500">
                Premium access
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
