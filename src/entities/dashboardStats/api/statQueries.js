import { useQuery } from "@tanstack/react-query"
import { getStats } from "./statApi"


export const useStatQuery = () => {
    return useQuery({
        queryKey: ['dashboardStats'],
        queryFn: getStats
    })
}