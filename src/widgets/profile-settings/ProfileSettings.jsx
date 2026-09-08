import { FormField } from "@/shared/ui/FormField/FormField";
import { useState } from "react";

const ProfileSettings = () => {
    const [form, setForm] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="settings-panel profile__settings">
            <h2 className="settings-panel__title">Профиль</h2>

            <div className="settings-panel__body profile-parameters__fields">
                <FormField
                    id="name"
                    name="name"
                    label="Имя"
                    value={form.name}
                    onChange={handleChange}
                />

                <FormField
                    id="email"
                    name="email"
                    label="Почта"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>

            <button className="btn btn__save settings-panel__action">Сохранить</button>
        </div>
    );
};

export default ProfileSettings;