import { useStatQuery } from "@/entities/dashboardStats/api/statQueries"
import ApplicationProgress from "@/widgets/application-progress/ui/ApplicationProgress";
import RecentApplications from "@/widgets/recent-applications/ui/RecentApplications";
import { StatsSummary } from "@/widgets/stats-summary/ui/statsSummary";

export const Dashboard = (props) => {
    const { data, isLoading, error } = useStatQuery();
    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки</div>;
    console.log(props)
    return (
        <div className="panel">
            <div className="container">
                <div className="panel__header">
                    <h1 className="panel__header__title">Панель управления</h1>
                    <p className="panel__header__subtitle">Контролируйте процесс поиска работы и подбора сотрудников</p>
                </div>
                <StatsSummary data={data} />
                <div className="panel__dashboard__bottom">
                    <ApplicationProgress />
                    <RecentApplications />
                </div>
            </div>
        </div>
    )
}