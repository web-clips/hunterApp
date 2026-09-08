
import { useRecentApplicationsQuery } from "@/entities/dashboardRecentApplications/api/recentApplicationsQueries";
import { statusProgress } from "@/shared/statusProgress";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis } from "recharts";



// const data = [
//     { name: "Отклик", value: 4, color: "#4F8EF7" },
//     { name: "Собесед.", value: 2, color: "#A855F7" },
//     { name: "Отказ", value: 1, color: "#FF4D4F" },
//     { name: "Оффер", value: 1, color: "#52C41A" },
// ];



const ApplicationProgress = () => {
    const { data: vacancies = [] } = useRecentApplicationsQuery();

    const chartData = [
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
            name: "Отказ",
            value: vacancies.filter(v => v.status === "rejected").length,
            color: "#FF4D4F"
        },
        {
            name: "Оффер",
            value: vacancies.filter(v => v.status === "offer").length,
            color: "#52C41A"
        }
    ];
    const allVacancy = chartData.reduce((acc, v) => acc + v.value, 0);
    const appliedStats = Math.floor(statusProgress(allVacancy, chartData[1].value))
    const offerStats = Math.floor(statusProgress(allVacancy, chartData[3].value))


    return (
        <div className="application__progress">
            <h2>Статистика откликов</h2>
            <div className="progress__charts">
                <ul>
                    <li>4</li>
                    <li>3</li>
                    <li>2</li>
                    <li>1</li>
                    <li>0</li>
                </ul>
                <ResponsiveContainer width="90%" height={200}>
                    <BarChart data={chartData}>
                        <XAxis dataKey="name" tick={{ fontSize: 8 }} />
                        <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={50}>
                            {chartData.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="application__progress__rating">
                <div className="application__progress__rating__row">
                    <p>Рейтинг собеседования</p>
                    <div className="rating__row__progress">
                        <div style={{ backgroundColor: chartData[1].color, width: `${appliedStats}%`, height: "100%", borderRadius: "50px" }}></div>
                    </div>
                    <p className="rating__row__point">{appliedStats}%</p>
                </div>
                <div className="application__progress__rating__row">
                    <p>Рейтинг офферов</p>
                    <div className="rating__row__progress">
                        <div style={{ backgroundColor: chartData[3].color, width: `${offerStats}%`, height: "100%", borderRadius: "50px" }}></div>
                    </div>
                    <p className="rating__row__point">{offerStats}%</p>
                </div>
            </div>
        </div >
    )
}

export default ApplicationProgress;