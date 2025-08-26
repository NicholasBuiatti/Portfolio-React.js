import { useQuery } from "@tanstack/react-query";
import { getProjects, getStarProjects } from "./api";

export const useProjects = (page, filters = {}) => {
  return useQuery({
    queryKey: ["projects", page, filters],
    queryFn: () => getProjects(page, filters),
    keepPreviousData: true,
  });
};

export const useStarProjects = () => {
  return useQuery({
    queryKey: ["starProjects"],
    queryFn: getStarProjects,
  });
};
