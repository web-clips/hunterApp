import { Analytics } from "@/pages/Analytics";
import Auth from "@/pages/Auth";
import { Dashboard } from "@/pages/Dashboard";
import { NotFound } from "@/pages/NotFound";
import { Settings } from "@/pages/Settings";
import Vacancies from "@/pages/Vacancies";
import { VacancyDetails } from "@/pages/VacancyDetails";
import { Layout } from "@/widgets/layout/Layout";
import { createBrowserRouter, Route, Routes } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/applications",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Vacancies />,
      },
      {
        path: ":id",
        element: <VacancyDetails />,
      },
    ],
  },
  {
    path: "/analytics",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Analytics />,
      },
    ],
  },
  {
    path: "/settings",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/register",
    element: <Auth />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
