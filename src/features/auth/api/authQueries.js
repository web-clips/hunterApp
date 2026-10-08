import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/shared/api/client";

const loginUser = async (data) => {
  const response = await apiClient.post("/auth/login", data);
  return response.data;
};

const registerUser = async (data) => {
  const response = await apiClient.post("/auth/register", data);
  return response.data;
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};
