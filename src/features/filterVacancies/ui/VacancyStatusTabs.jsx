import Tabs from "@/shared/ui/Tabs/Tabs";


export default function VacancyStatusTabs({ items, value, changeStatus }) {
    return (
        <Tabs
            items={items}
            value={value}
            changeStatus={changeStatus}
        />
    )
}