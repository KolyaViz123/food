import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import ErrorPage from "../pages/ErrorPage";
import Auth from "../pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipe",
        element: <Recipe />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);

export default router;
