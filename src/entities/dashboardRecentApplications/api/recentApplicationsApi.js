import { apiClient } from "@/shared/api/client"

export const getRecentApplications = async () => {
    const { data } = await apiClient.get('/applications');
    return data;
}