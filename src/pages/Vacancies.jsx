import { colorMeta } from "@/constants/vacancyColors";
import { useRecentApplicationsQuery } from "@/entities/dashboardRecentApplications/api/recentApplicationsQueries";
import VacancyCard from "@/entities/vacancy/ui/VacancyCard/VacancyCard";
import VacancyStatusTabs from "@/features/filterVacancies/ui/VacancyStatusTabs";
import { useState } from "react";


const Vacancies = () => {

    const { data, isLoading, error } = useRecentApplicationsQuery();


    const [statusTab, setStatusTab] = useState("all")

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузкиА</div>;

    const tabs = [
        {
            id: 1,
            label: 'all',
            labelRu: 'Все',
            count: data.length
        },
        {
            id: 2,
            label: 'applied',
            labelRu: 'Откликнулся',
            count: data.filter((v) => v.status === 'applied').length,
        },
        {
            id: 3,
            label: 'interview',
            labelRu: 'Собеседование',
            count: data.filter((v) => v.status === 'interview').length,
        },
        {
            id: 4,
            label: 'offer',
            labelRu: 'Оффер',
            count: data.filter((v) => v.status === 'offer').length,
        },
        {
            id: 5,
            label: 'rejected',
            labelRu: 'Отказ',
            count: data.filter((v) => v.status === 'rejected').length,
        },
    ]


    const filteredVacancies =
        statusTab === 'all'
            ? data
            : data.filter((v) => v.status === statusTab)




    return (
        <div className="panel">
            <div className="container">
                <div className="panel__header">
                    <h1 className="panel__header__title">Вакансии</h1>
                    <p className="panel__header__subtitle">Найдено {data.length} вакансий</p>
                </div>
                <VacancyStatusTabs
                    items={tabs}
                    value={statusTab}
                    changeStatus={setStatusTab}
                />
                <div className="wrapper">
                    {filteredVacancies.map((v) => (
                        <VacancyCard key={v.id} {...v} colorMeta={colorMeta} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Vacancies;