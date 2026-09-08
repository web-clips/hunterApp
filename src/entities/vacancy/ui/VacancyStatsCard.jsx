
export const VacancyStatsCard = (props) => {
    const { titleRu, value, subtitleRu, statsMeta, title, colorMeta } = props;
    const Icon = statsMeta[title.toLowerCase()]
    const color = colorMeta[title.toLowerCase()];


    return (
        <div className="stat__card">
            <div className="stat__card__top">
                <span>{titleRu}</span>
                <div className="stat__card__icon" style={{ background: color.bg }}>
                    <Icon size={18} color={color.color} />
                </div>
            </div>
            <div className="stat__card__bottom">
                <strong>
                    {value}
                </strong>
                <span>{subtitleRu}</span>
            </div>
        </div >
    )
}