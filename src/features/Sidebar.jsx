import { Link, NavLink } from "react-router-dom";
import { sidebarLinks } from "./model/sidebarLinks"
import logo from '@/shared/assets/logo2.png'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <nav>
                {sidebarLinks.map((item,index) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                        key={index}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            <Icon size={14} />
                            <span>{item.label}</span>
                        </NavLink>
                    )
                })}
            </nav>
        </div>
    )
}