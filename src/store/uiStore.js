import { create } from "zustand";

export const useUIStore = create((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export const useUiStore = create((set) => ({
  navbarDropdown: false,
  // otherDropdown: false, //ci fossero altri dropdown
  toggleNavbarDropdown: () => set((state) => ({ navbarDropdown: !state.navbarDropdown })),
  // toggleOtherDropdown: () => set((state) => ({ otherDropdown: !state.otherDropdown })), //ci fossero altri dropdown
  closeAllDropdowns: () => set({ navbarDropdown: false }), // otherDropdown: false
}));