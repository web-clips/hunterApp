import SettingsParameters from "@/widgets/parameters-settings/ParameterSettings"
import ProfileSettings from "@/widgets/profile-settings/ProfileSettings"


export const Settings = () => {
    return (
        <div className="panel">
            <div className="container">
                <div className="panel__header">
                    <h1 className="panel__header__title">Настройки</h1>
                    <p className="panel__header__subtitle">Управляйте настройками аккаунта</p>
                </div>
                <div className="wrap">
                    <div className="wrap__item">
                        <ProfileSettings />
                    </div>
                    <div className="wrap__item">
                        <SettingsParameters />
                    </div>
                </div>
            </div>
        </div>
    )
}