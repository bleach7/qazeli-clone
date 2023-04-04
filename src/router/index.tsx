import { PublicLayout } from "@/layouts";
import {
  ForgotPassword,
  Home,
  Login,
  NotFound,
  UnderDevelopment,
} from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/tours",
        element: <UnderDevelopment />,
      },
      {
        path: "/excursions",
        element: <UnderDevelopment />,
      },
      {
        path: "/flights",
        element: <UnderDevelopment />,
      },
      {
        path: "/railway-tickets",
        element: <UnderDevelopment />,
      },
      {
        path: "/taxi",
        element: <UnderDevelopment />,
      },
      {
        path: "/directions",
        element: <UnderDevelopment />,
      },
      {
        path: "/contacts",
        element: <UnderDevelopment />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);
