import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { MainApp } from "./MainApp";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainApp />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "*",
          element: <Navigate to="about"/>,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
