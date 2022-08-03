import create from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  isAdmin: boolean;
  setAdmin: (val: boolean) => void;
}

export const useStore = create<Store>((set) => ({
  isAdmin: false,
  setAdmin: (val: boolean) => set({ isAdmin: val }),
}));
