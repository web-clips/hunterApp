import { useRecentApplicationsQuery } from '@/entities/dashboardRecentApplications/api/recentApplicationsQueries';
import './ConversionFunnel.css'
import { statusProgress } from '@/shared/statusProgress';

export const ConversionFunnel = () => {
    const { data: vacancies = [] } = useRecentApplicationsQuery();

    const chartData = [
        {
            name: "Всего",
            value: vacancies.length,
            color: "#31AFFD"
        },
        {
            name: "Отклик",
            value: vacancies.filter(v => v.status === "applied").length,
            color: "#4F8EF7"
        },
        {
            name: "Собесед.",
            value: vacancies.filter(v => v.status === "interview").length,
            color: "#A855F7"
        },
        {
            name: "Оффер",
            value: vacancies.filter(v => v.status === "offer").length,
            color: "#52C41A"
        }
    ];

    // const allVacancy = chartData.reduce((acc, v) => acc + v.value, 0);
    const interviewStat = Math.floor(statusProgress(chartData[0].value, chartData[2].value))
    const offerStats = Math.floor(statusProgress(chartData[0].value, chartData[3].value))


    const metricStats = [
        {
            name: 'interview',
            label: 'Процент собеседований',
            value: interviewStat
        },
        {
            name: 'offers',
            label: 'Процент офферов',
            value: offerStats
        },
        {
            name: 'all',
            label: 'Всего откликов',
            value: chartData[0].value
        },
        {
            name: 'activeVacancy',
            label: 'Активные',
            value: vacancies.filter((v) => v.status === "interview" || v.status === "applied").length
        },
    ]

    return (
        <div className="conversion__funnel">
            <h2 className="conversion__funnel__title">
                Воронка конверсии
            </h2>
            <div className="conversion__stats">
                {
                    chartData.filter((v) => v.name !== 'Отклик').map((d) => (
                        <div className="conversion__item">
                            <div className="conversion__heads">
                                <p className="conversion__label">{d.name === 'Собесед.' ? 'Получил приглашение на собеседование' : d.name === 'Оффер' ? 'Получил оффер' : 'Всего'}</p>
                                <p className="conversion__percent">
                                    {d.value} <span>{d.name === 'Всего' ? 100 : d.name === "Собесед." ? interviewStat : d.name === "Оффер" ? offerStats : null}%</span>
                                </p>
                            </div>
                            <div className="conversion__line">
                                <div style={{ background: d.color, width: d.name === 'Всего' ? '100%' : d.name === "Собесед." ? interviewStat + '%' : d.name === "Оффер" ? offerStats + '%' : null }}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="conversion__metrics">
                {
                    metricStats.map((m) => (
                        <div className="metric__item">
                            <h3>{m.label}</h3>
                            <p>{m.value}%</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}