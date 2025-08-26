import { apiClient } from "../../lib/apiClient";

export const getProjects = async (page = 1) => {
  const response = await apiClient.get(`/projects?page=${page}`);
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

export const getTypes = async () => {
  const response = await apiClient.get("/projects/types");
  return response.data;
};

export const getLanguages = async () => {
  const response = await apiClient.get("/projects/languages");
  return response.data;
};
