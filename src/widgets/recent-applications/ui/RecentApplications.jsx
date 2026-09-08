import ApplicationCard from "@/entities/applications/ApplicationCard";
import { useRecentApplicationsQuery } from "@/entities/dashboardRecentApplications/api/recentApplicationsQueries";



const RecentApplications = () => {
    const { data, isLoading, error } = useRecentApplicationsQuery();
    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки</div>;
  

    return (
        <div className="recent__applications">
            <div className="recent__applications__row">
                <h2>Последние отклики</h2>
                <a href="">Смотреть все</a>
            </div>
            <div className="applications">
                {
                    data.map((a) => (
                        <ApplicationCard key={a.id} {...a} />
                    ))
                }
            </div>
        </div>                                      
    )
}

export default RecentApplications;