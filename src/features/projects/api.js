import { apiClient } from "../../lib/apiClient";

export const getProjects = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const response = await apiClient.get(`/projects?${query}`);
  return response.data;
};

export const getDetailsProject = async (id) => {
  const response = await apiClient.get(`/projects/${id}`);
  return response.data;
};

export const getStarProjects = async () => {
  const response = await apiClient.get("/projects/favorite");
  return response.data;
};
