import { useQuery } from "@tanstack/react-query"
import { getRecentApplications } from "./recentApplicationsApi"


export const useRecentApplicationsQuery = () => {
    return useQuery({
        queryKey: ['applications'],
        queryFn: getRecentApplications
    })
}