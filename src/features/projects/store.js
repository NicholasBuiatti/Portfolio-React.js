import { create } from "zustand";

export const useProjectStore = create((set) => ({
  selectedProjectId: null,
  setSelectedProject: (id) => set({ selectedProjectId: id }),
  selectedType: "",
  setSelectedType: (type) => set({ selectedType: type }),
  selectedLanguage: "",
  setSelectedLanguage: (lang) => set({ selectedLanguage: lang }),
}));
