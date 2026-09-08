
const colorMeta = {
    total: { bg: "#EFF2F3", color: "#757575", statusRu: 'Все' },
    applied: { bg: "#84d0ff38", color: "#31AFFD", statusRu: 'Откликнулся' },
    interview: { bg: "#FBECFF", color: "#D337FE", statusRu: 'Собеседование' },
    rejected: { bg: "#FFECEC", color: "#FF4C4C", statusRu: 'Отказ' },
    offer: { bg: "#F0FFEF", color: "#41EC36", statusRu: 'Оффер' },
}
const ApplicationCard = ({ company, companyInitials, nextActionDate, position, status }) => {
    return (
        <div className="application__card">
            <div className="application__card__companyInitials">{companyInitials}</div>
            <div className="application__card__vacancyInfo">
                <h3>{position}</h3>
                <div className="application__card__vacancyInfo__details">
                    <span>{company}</span>
                    <span>{nextActionDate}</span>
                </div>
            </div>
            <div className="application__card__status" style={{ backgroundColor: colorMeta[status].bg, color: colorMeta[status].color }}>{colorMeta[status].statusRu}</div>
        </div >
    )
}

export default ApplicationCard;