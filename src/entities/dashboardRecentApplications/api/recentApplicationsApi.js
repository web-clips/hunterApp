import { apiClient } from "@/shared/api/client"

export const getRecentApplications = async () => {
    const { data } = await apiClient.get('/applications');
    return data;
}

export const createApplication = async (application) => {
    const { data } = await apiClient.post('/applications', application);
    return data;
}