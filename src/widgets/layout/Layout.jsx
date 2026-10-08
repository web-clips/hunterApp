import { VacancyAddModal } from "@/entities/vacancyAddModal/ui/VacancyAddModal";
import { Header } from "@/features/Header"
import { Sidebar } from "@/features/Sidebar"
import { useState } from "react";
import { Outlet } from "react-router-dom"



export const Layout = () => {
    const [isVacancyModalOpen, setIsVacancyModalOpen] = useState(false);
    return (
        <div>
            <Header
                onAddVacancy={() => setIsVacancyModalOpen(true)}
            />
            <Sidebar />
            <main>
                <Outlet />
            </main>
            {isVacancyModalOpen && (
                <VacancyAddModal
                    onClose={() => setIsVacancyModalOpen(false)}
                />)}
        </div>
    )
}