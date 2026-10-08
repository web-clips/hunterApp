import { colorMeta } from "@/constants/vacancyColors";
import { useRecentApplicationsQuery } from "@/entities/dashboardRecentApplications/api/recentApplicationsQueries";
import { Link, useNavigate, useParams } from "react-router-dom"



export const VacancyDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useRecentApplicationsQuery();
    const navigate = useNavigate();


    if (isLoading) return <div>Загрузка...</div>
    if (error) return <div>Ошибка</div>


    const selectedVacancy = data?.find((v) => v.id === id)
    const {
        status,
        company,
        salaryFrom,
        salaryTo,
        currency,
        location,
        appliedDate,
        position,
        notes,
    } = selectedVacancy;

    const statusElements = {
        applied: "Откликнулся",
        interview: 'Собеседование',
        rejected: 'Отказ',
        offer: 'Оффер',
    }
    const color = colorMeta[status];



    return (
        <div className="panel">
            <div className="container">
                <div className="panel__back__btn">
                    <button onClick={() => navigate(-1)}>Назад</button>
                </div>
                <div className="panel__vacancy__window">
                    <div className="panel__vacancy--header">
                        <div>
                            <h3 className="panel__vacancy--title">{position}</h3>
                            <span className="panel__vacancy--company">{company}</span>
                        </div>
                        <span className="vacancy__card__head__status" style={{ background: color.bg, color: color.color }}>
                            <span className="vacancy__card__status__dot" style={{ background: color.color }} />
                            {statusElements[status]}
                        </span>

                    </div>
                    <div className="panel__vacancy--info">
                        <div className="panel--info__item">
                            <div className="panel--info__item__label">
                                Город
                            </div>
                            <div className="panel--info__item__value">
                                {location}
                            </div>
                        </div>
                        <div className="panel--info__item">
                            <div className="panel--info__item__label">
                                Заработная плата
                            </div>
                            <div className="panel--info__item__value">
                                от {salaryFrom} до {salaryTo}
                            </div>
                        </div>
                        <div className="panel--info__item">
                            <div className="panel--info__item__label">
                                Дата
                            </div>
                            <div className="panel--info__item__value">
                                {appliedDate}
                            </div>
                        </div>
                    </div>
                    <div className="panel__vacancy--desc">
                        <h4 className="panel--desc__title">
                            Описание
                        </h4>
                        <p className="panel--desc__text">
                            {notes}
                        </p>
                    </div>
                    <div className="panel__vacancy--link">
                        <a href="">Посмотреть оригинальное объявление о вакансии</a>
                    </div>
                    <div className="panel__vacancy--bottom">
                        <div className="panel--bottom__delete">
                        <button>Удалить</button>
                        </div>
                        <div className="panel--bottom__edit">
                           <button> Редактировать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}