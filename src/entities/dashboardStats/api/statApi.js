import { apiClient } from "@/shared/api/client";


export const getStats = async () => {
    const { data } = await apiClient.get('/dashboardStats');
    return data;
}