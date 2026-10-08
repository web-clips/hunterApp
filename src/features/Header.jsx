import { Bell, Plus, Search } from 'lucide-react'
import { NotificationsDropdown } from './notificationsDropdown/ui/NotificationsDropdown'
export const Header = ({ onAddVacancy }) => {

    return (
        <header>
            <div className="header__search">
                <Search size={14} />
                <input type="search" placeholder='Поиск вакансий...' />
            </div>
            <div className="header__notify">
                <NotificationsDropdown />
            </div>
            <div className="header__add__btn">
                <button onClick={onAddVacancy}><Plus size={14} />Добавить вакансию</button>
            </div>
        </header>
    )
}