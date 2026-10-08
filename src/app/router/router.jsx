import { Analytics } from "@/pages/Analytics";
import Auth from "@/pages/Auth";
import { Dashboard } from "@/pages/Dashboard";
import { NotFound } from "@/pages/NotFound";
import { Settings } from "@/pages/Settings";
import Vacancies from "@/pages/Vacancies";
import { VacancyDetails } from "@/pages/VacancyDetails";
import { Layout } from "@/widgets/layout/Layout";

import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "applications",
            element: <Vacancies />,
          },
          {
            path: "applications/:id",
            element: <VacancyDetails />,
          },
          {
            path: "analytics",
            element: <Analytics />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <Auth />,
      },
      {
        path: "/register",
        element: <Auth />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
