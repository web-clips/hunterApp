import { Bell, Plus, Search } from 'lucide-react'
export const Header = ({ onAddVacancy }) => {

    return (
        <header>
            <div className="header__search">
                <Search size={14} />
                <input type="search" placeholder='Поиск вакансий...' />
            </div>
            <div className="header__notify">
                <button><Bell size={16} color='#777' /></button>
            </div>
            <div className="header__add__btn">
                <button onClick={onAddVacancy}><Plus size={14} />Добавить вакансию</button>
            </div>
        </header>
    )
}