import { useState } from "react";
import { SelectField } from "@/shared/ui/SelectField/SelectField";

const SettingsParameters = () => {
    const [form, setForm] = useState({
        status: "applied",
        currency: "kzt",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="settings-panel settings-parameters">
            <h2 className="settings-panel__title settings-parameters__title">
                Параметры
            </h2>

            <div className="settings-panel__body settings-parameters__fields">
                <SelectField
                    id="status"
                    name="status"
                    label="Статус по-умолчанию"
                    value={form.status}
                    onChange={handleChange}
                    options={[
                        { value: "applied", label: "Отклики" },
                        { value: "interview", label: "Собеседование" },
                        { value: "offer", label: "Оффер" },
                    ]}
                />

                <SelectField
                    id="currency"
                    name="currency"
                    label="Валюта"
                    value={form.currency}
                    onChange={handleChange}
                    options={[
                        { value: "kzt", label: "Тенге (₸)" },
                        { value: "usd", label: "Доллар ($)" },
                        { value: "eur", label: "Евро (€)" },
                    ]}
                />
            </div>

            <button className="btn btn__save settings-panel__action">
                Сохранить параметры
            </button>
        </div>
    );
};

export default SettingsParameters;
