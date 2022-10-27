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
import AllCourses from "../component/Courses/AllCourses";
import DetailsComponent from "../component/Courses/DetailsComponent";
import PremiumAccess from "../component/Courses/PremiumAccess";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/courses",
        id: "allCourses",
        loader: () => fetch(`https://lfc-server.vercel.app/course`),
        element: <Courses></Courses>,
        children: [
          {
            index: true,
            element: <AllCourses></AllCourses>,
          },
          {
            path: ":id",
            loader: ({ params }) =>
              fetch(`https://lfc-server.vercel.app/course/${params.id}`),

            element: <Course></Course>,
          },
          {
            path: "all",
            element: <AllCourses></AllCourses>,
          },
        ],
      },
      {
        path: "/course-details/:id",
        loader: ({ params }) =>
          fetch(`https://lfc-server.vercel.app/course/${params.id}`),
        element: <DetailsComponent></DetailsComponent>,
      },
      {
        path: "/premium-access/:id",
        loader: ({ params }) =>
          fetch(`https://lfc-server.vercel.app/course/${params.id}`),
        element: (
          <PrivateRoute>
            <PremiumAccess />
          </PrivateRoute>
        ),
      },
      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
export default routes;
