import { useRecentApplicationsQuery } from "@/entities/dashboardRecentApplications/api/recentApplicationsQueries";
import { useStatQuery } from "@/entities/dashboardStats/api/statQueries";
import ApplicationProgress from "@/widgets/application-progress/ui/ApplicationProgress";
import RecentApplications from "@/widgets/recent-applications/ui/RecentApplications";
import { StatsSummary } from "@/widgets/stats-summary/ui/StatsSummary";

export const Dashboard = () => {
  const {
    data: applications = [],
    isLoading,
    error,
  } = useRecentApplicationsQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  const total = applications.length;
  const applied = applications.filter((a) => a.status === "applied").length;
  const interview = applications.filter((a) => a.status === "interview").length;
  const rejected = applications.filter((a) => a.status === "rejected").length;
  const offer = applications.filter((a) => a.status === "offer").length;

  const stats = [
    {
      id: "1",
      title: "Total",
      titleRu: "Всего",
      value: total,
      subtitleRu: "Все отклики",
    },
    {
      id: "2",
      title: "Applied",
      titleRu: "Откликнулся",
      value: applied,
      subtitleRu: "Ожидают ответа",
    },
    {
      id: "3",
      title: "Interview",
      titleRu: "Интервью",
      value: interview,
      subtitleRu: "В процессе",
    },
    {
      id: "4",
      title: "Rejected",
      titleRu: "Отказ",
      value: rejected,
      subtitleRu: "Не выбран",
    },
    {
      id: "5",
      title: "Offer",
      titleRu: "Оффер",
      value: offer,
      subtitleRu: "Поздравляем!",
    },
  ];


  return (
    <div className="panel">
      <div className="container">
        <div className="panel__header">
          <h1 className="panel__header__title">Панель управления</h1>
          <p className="panel__header__subtitle">
            Контролируйте процесс поиска работы и подбора сотрудников
          </p>
        </div>
        <StatsSummary data={stats} />
        <div className="panel__dashboard__bottom">
          <ApplicationProgress />
          <RecentApplications />
        </div>
      </div>
    </div>
  );
};
