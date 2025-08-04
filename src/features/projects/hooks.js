import { useQuery } from "@tanstack/react-query";
import { getProjects, getStarProjects } from "./api";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
};

export const useStarProjects = () => {
  return useQuery({
    queryKey: ["starProjects"],
    queryFn: getStarProjects,
  });
};
