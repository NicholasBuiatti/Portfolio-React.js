import { useQuery } from "@tanstack/react-query";
import { getProjects, getStarProjects } from "./api";

export const useProjects = (page) => {
  return useQuery({
    queryKey: ["projects", page],
    queryFn: () => getProjects({page}),
    keepPreviousData: true,
  });
};

export const useStarProjects = () => {
  return useQuery({
    queryKey: ["starProjects"],
    queryFn: getStarProjects,
  });
};
