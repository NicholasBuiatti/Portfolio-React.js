import { useQuery } from "@tanstack/react-query";
import { getProjects, getStarProjects } from "./api";

export const useProjects = (filters) => {
  return useQuery({
    queryKey: ["projects", filters],
    queryFn: () => getProjects(filters),
    keepPreviousData: true,
  });
};

export const useStarProjects = () => {
  return useQuery({
    queryKey: ["starProjects"],
    queryFn: getStarProjects,
  });
};
