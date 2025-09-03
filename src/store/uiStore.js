import { create } from "zustand";

export const useUiStore = create((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  navbarDropdown: false,
  // otherDropdown: false, //ci fossero altri dropdown
  toggleNavbarDropdown: () => set((state) => ({ navbarDropdown: !state.navbarDropdown })),
  // toggleOtherDropdown: () => set((state) => ({ otherDropdown: !state.otherDropdown })), //ci fossero altri dropdown
  closeAllDropdowns: () => set({ navbarDropdown: false }), // otherDropdown: false
}));

export const useFormStore = create((set) => ({
  formData: {},
  setValue: (name, value) =>
    set((state) => ({
      formData: { ...state.formData, [name]: value },
    })),
  resetForm: () => set({ formData: {} }),
}));