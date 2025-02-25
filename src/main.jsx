import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./components/Home/Home";
import Statistics from "./pages/Statistics/Statistics";
import AppliedJob from "./pages/AppliedJob/AppliedJob";
import Blog from "./pages/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/Job/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied-job",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('../jobs.json')
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
