import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ohters/ErrorPage";
import Faq from "../component/ohters/Faq";
import Home from "../component/Home";
import Main from "../Layouts/Main";
import Blog from "../component/ohters/Blog";
import Login from "../component/Auth/Login";
import Register from "../component/Auth/Register";
import Courses from "../component/Courses/Courses";
import Course from "../component/Courses/Course";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/courses",
        loader: () => fetch(`http://localhost:5000/course`),
        element: <Courses></Courses>,
        children: [
          {
            path: ":id",
            loader: ({ params }) =>
              fetch(`http://localhost:5000/course/${params.id}`),

            element: <Course></Course>,
          },
        ],
      },

      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
export default routes;
