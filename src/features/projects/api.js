import { apiClient } from "../../lib/apiClient";

export const getProjects = async () => {
  const response = await apiClient.get("/projects");
  return response.data;
};

export const getDetailsProject = async (id) => {
  const response = await apiClient.get(`/projects/${id}`);
  return response.data;
};
