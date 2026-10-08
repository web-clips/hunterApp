
import { Bell } from 'lucide-react'
import { useState } from 'react'
import './NotificationsDropdown.css'

export const NotificationsDropdown = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(!open)}><Bell size={16} color='#777' /></button>
            {open && (
                <>
                    <div className="overlay" onClick={() => setOpen(!open)} />
                    <div className="notifications__box">
                        <h3>Уведомления</h3>
                    </div>
                </>
            )}
        </>
    )
}