import { FormField } from "@/shared/ui/FormField/FormField";
import "./VacancyAddModal.css";
import { useState } from "react";
import { SelectField } from "@/shared/ui/SelectField/SelectField";
import { TextareaField } from "@/shared/ui/TextareaField/TextareaField";
import { useCreateApplicationMutation } from "@/entities/dashboardRecentApplications/api/recentApplicationsQueries";

export const VacancyAddModal = ({ onClose }) => {
  const [form, setForm] = useState({
    vacancy: "",
    organization: "",
    salary: "",
    workMode: "remote",
    location: "",
    vacancyLink: "",
    status: "applied",
    description: "",
  });
  const { mutate: createApplication, isPending } =
    useCreateApplicationMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const application = {
      position: form.vacancy,
      company: form.organization,

      status: form.status,

      salaryFrom: form.salary ? Number(form.salary) : null,
      salaryTo: form.salary ? Number(form.salary) : null,

      currency: "KZT",
      location: form.location,

      workFormat: form.workMode,

      appliedDate: new Date().toISOString().split("T")[0],

      source: "Manual",
      postingUrl: form.vacancyLink,
      notes: form.description,

      nextAction: "",
      nextActionDate: null,
    };
    createApplication(application, {
      onSuccess: (data) => {
        console.log("Успешно:", data);
        onClose();
      },
      onError: (error) => {
        console.log("Ошибка:", error);
      },
    });
  };
  return (
    <div className="modal__overlay">
      <div className="modal__window">
        <div className="modal__head">
          <h3>Параметры</h3>
        </div>
        <form onSubmit={handleSubmit} className="modal__form">
          <div className="form__roll">
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
                  { value: "office", label: "В офисе" },
                  { value: "remote", label: "Удаленно" },
                  { value: "hybrid", label: "Гибридный формат" },
                ]}
              />
            </div>
            <FormField
              id="location"
              name="location"
              label="Город"
              value={form.location}
              onChange={handleChange}
              placeholder="Например: Астана"
              required={true}
            />
            <FormField
              id="vacancyLink"
              name="vacancyLink"
              label="Ссылка на вакансию"
              value={form.vacancyLink}
              onChange={handleChange}
              placeholder="https://..."
            />
            <SelectField
              id="status"
              name="status"
              label="Статус"
              value={form.status}
              onChange={handleChange}
              options={[
                { value: "applied", label: "Откликнулся" },
                { value: "interview", label: "Собеседование" },
                { value: "offer", label: "Оффер" },
                { value: "rejected", label: "Отказ" },
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
          </div>
          <div className="modal__wrap modal__wrap--actions">
            <button
              type="button"
              className="modal__btn cancel--btn"
              onClick={onClose}
            >
              Отмена
            </button>
            <button
              type="submit"
              className="modal__btn save--btn"
              disabled={isPending}
            >
              {isPending ? "Сохранение..." : "Сохранить"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
