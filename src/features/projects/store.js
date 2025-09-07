import { create } from "zustand";

export const useProjectStore = create((set) => ({
  selectedType: "",
  setSelectedType: (type) => set({ selectedType: type }),
  selectedLanguage: "",
  setSelectedLanguage: (lang) => set({ selectedLanguage: lang }),
}));
