import { FormField } from '@/shared/ui/FormField/FormField'
import './VacancyAddModal.css'
import { useState } from 'react'
import { SelectField } from '@/shared/ui/SelectField/SelectField'
import { TextareaField } from '@/shared/ui/TextareaField/TextareaField'

export const VacancyAddModal = ({ onClose }) => {
    const [form, setForm] = useState({
        vacancy: "",
        organization: "",
        salary: "",
        workMode: "remote",
        vacancyLink: "",
        vacancyStatus: "applied",
        description: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className="modal__overlay">
            <div className="modal__window">
                <div className="modal__head">
                    <h3>Параметры</h3>
                </div>
                <form className="modal__form">
                    <FormField
                        id="vacancy"
                        name="vacancy"
                        label="Название вакансии"
                        value={form.vacancy}
                        onChange={handleChange}
                        placeholder="Например: Senior Frontend-разработчик"
                        required={true}
                    />
                    <FormField
                        id="organization"
                        name="organization"
                        label="Наименование организации"
                        value={form.organization}
                        onChange={handleChange}
                        placeholder="Например: Stripe"
                        required={true}
                    />
                    <div className="modal__wrap">
                        <FormField
                            id="salary"
                            name="salary"
                            label="Заработная плата"
                            value={form.salary}
                            type="number"
                            onChange={handleChange}
                            placeholder="Например: 100 000 ₸"
                        />
                        <SelectField
                            id="workMode"
                            name="workMode"
                            label="Формат работы"
                            value={form.workMode}
                            onChange={handleChange}
                            options={[
                                { value: "On-site", label: "Отклики" },
                                { value: "Remote", label: "Собеседование" },
                                { value: "Hybrid", label: "Гибридный формат" },
                                { value: "Full-time", label: "Полная занятость" },
                                { value: "Part-time", label: "Частичная занятость" },
                            ]}
                        />
                    </div>
                    <FormField
                        id="vacancyLink"
                        name="vacancyLink"
                        label="Ссылка на вакансию"
                        value={form.vacancyLink}
                        onChange={handleChange}
                        placeholder="https://..."
                    />
                    <SelectField
                        id="vacancyStatus"
                        name="vacancyStatus"
                        label="Статус"
                        value={form.vacancyStatus}
                        onChange={handleChange}
                        options={[
                            { value: "applied", label: "Отклики" },
                            { value: "interview", label: "Собеседование" },
                            { value: "offer", label: "Оффер" },
                        ]}
                    />
                    <TextareaField
                        id="description"
                        name="description"
                        label="Описание"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Добавьте любые заметки по этой заявке..."
                    />
                    <div className="modal__wrap modal__wrap--actions">
                        <button
                            className="modal__btn cancel--btn"
                            onClick={onClose}>
                            Отмена
                        </button>
                        <button className="modal__btn save--btn">
                            Сохранить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}