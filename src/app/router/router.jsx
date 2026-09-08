import { Analytics } from "@/pages/Analytics";
import { Dashboard } from "@/pages/Dashboard";
import { NotFound } from "@/pages/NotFound";
import { Settings } from "@/pages/Settings";
import Vacancies from "@/pages/Vacancies";
import { Layout } from "@/widgets/layout/Layout";
import { createBrowserRouter, Route, Routes } from "react-router-dom";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            }
        ]
    },
    {
        path: '/applications',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Vacancies />
            }
        ]
    },
    {
        path: '/analytics',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Analytics />
            }
        ]
    },
    {
        path: '/settings',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Settings />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])