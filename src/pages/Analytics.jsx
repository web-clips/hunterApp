import ApplicationProgress from "@/widgets/application-progress/ui/ApplicationProgress"
import { ConversionFunnel } from "@/widgets/conversion-funnel/ui/ConversionFunnel"

export const Analytics = () => {
    return (
        <div className="panel">
            <div className="container">
                <div className="panel__header">
                    <h1 className="panel__header__title">Аналитика</h1>
                    <p className="panel__header__subtitle">Полезная информация о вашем поиске работы</p>
                </div>
                <div className="wrap">
                    <div className="wrap__item">
                        <ApplicationProgress/>
                    </div>
                     <div className="wrap__item">
                        <ConversionFunnel/>
                    </div>
                </div>
            </div>
        </div>
    )
}