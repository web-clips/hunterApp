import './Tabs.css'


export default function Tabs({ items, value, changeStatus }) {
    return (
        <div className="tabs">
            {items.map((item) => (
                <button
                    key={item.id}
                    className={
                        value === item.label
                            ? 'tabs__item tabs__item__active'
                            : 'tabs__item'
                    }
                    onClick={() => changeStatus(item.label)}
                >
                    {item.labelRu}
                    <span>{item.count}</span>
                </button>
            ))}
        </div>
    )
}