import { apiClient } from "../../lib/apiClient";

export const postMessage = async (formData) => {
  const response = await apiClient.post("/contacts", formData);
  return response.data;
};
