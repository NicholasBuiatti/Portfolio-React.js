import { create } from "zustand";

export const useProjectStore = create((set) => ({
  selectedProjectId: null,
  setSelectedProject: (id) => set({ selectedProjectId: id }),
}));
