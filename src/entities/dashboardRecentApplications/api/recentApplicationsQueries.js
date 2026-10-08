import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createApplication, getRecentApplications } from "./recentApplicationsApi"


export const useRecentApplicationsQuery = () => {
    return useQuery({
        queryKey: ['applications'],
        queryFn: getRecentApplications
    })
}

export const useCreateApplicationMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createApplication,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['applications']
            })
        }
    })
}