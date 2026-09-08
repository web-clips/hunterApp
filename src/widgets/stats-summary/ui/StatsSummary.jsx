import { colorMeta } from "@/constants/vacancyColors";
import { VacancyStatsCard } from "@/entities/vacancy/ui/VacancyStatsCard"
import { BadgeCheck, CircleX, FileCheck, Inbox, Users } from "lucide-react";

const statsMeta = {
    total: Inbox,
    applied: FileCheck,
    interview: Users,
    rejected: CircleX,
    offer: BadgeCheck
}



export const StatsSummary = (props) => {
    const { data } = props;
    return (
        <div className="dashboard__stats">
            {data.map((s) => (
                <VacancyStatsCard key={s.id} {...s} statsMeta={statsMeta} colorMeta={colorMeta} />
            ))}
        </div>
    )
}
