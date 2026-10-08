import { Link } from 'react-router-dom';
import './VacancyCard.css'


export default function VacancyCard(props) {
    const {
        id,
        status,
        company,
        salaryFrom,
        salaryTo,
        currency,
        location,
        appliedDate,
        position,
        notes,
        colorMeta
    } = props;
    const statusElements = {
        applied: "Откликнулся",
        interview: 'Собеседование',
        rejected: 'Отказ',
        offer: 'Оффер',
    }
    const color = colorMeta[status];


    return (
        <div className="vacancy__card">
            <div className="vacancy__card__head">
                <div className="vacancy__card__head__heading">
                    <h3 className="vacancy__card__head__heading__title">
                        {position}
                    </h3>

                    <p className="vacancy__card__head__heading__company">
                        {company}
                    </p>
                </div>
                <span className="vacancy__card__head__status" style={{ background: color.bg, color: color.color }}>
                    <span className="vacancy__card__status__dot" style={{ background: color.color }} />
                    {statusElements[status]}
                </span>
            </div>
            <div className="vacancy__card__info">
                <div className="vacancy__card__info__item">
                    <div className="vacancy__card__info__item__label">
                        Город
                    </div>
                    <div className="vacancy__card__info__item__value">
                        {location}
                    </div>
                </div>
                <div className="vacancy__card__info__item">
                    <div className="vacancy__card__info__item__label">
                        Дата
                    </div>
                    <div className="vacancy__card__info__item__value">
                        {appliedDate}
                    </div>
                </div>
            </div>
            <div className="vacancy__card__desc">
                {notes}
            </div>
            <div className="vacancy__card__footer">
                <div className="vacancy__card__footer__salary">
                    от {salaryFrom} до {salaryTo} {currency}
                </div>
                <Link to={`/applications/${id}`}>
                    <button className="vacancy__card__footer__button">
                        Подробнее
                    </button>
                </Link>
            </div>
        </div>
    )
}