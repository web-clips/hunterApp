import { Dashboard } from "@/pages/Dashboard";
import { Bell, Briefcase, ChartPie, LayoutDashboard, Settings, SlidersHorizontalIcon } from "lucide-react";

export const sidebarLinks = [
    {
        path: '/',
        label: 'Панель управления',
        icon: LayoutDashboard
    },
    {
        path: '/applications',
        label: 'Вакансии',
        icon: Briefcase
    },
    {
        path: '/analytics',
        label: 'Аналитика',
        icon: ChartPie
    },
    {
        path: '/settings',
        label: 'Настройки',
        icon: SlidersHorizontalIcon
    },
]