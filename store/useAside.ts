import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Props {
  asideOpen: boolean;
  setAsideOpen: (asideOpen: boolean) => void;
}

export const useAside = create(
  persist<Props>(
    (set, get) => {
      return {
        asideOpen: true,
        setAsideOpen: (asideOpen: boolean) => set({ asideOpen }),
      };
    },
    { name: "kanban-aside-open" },
  ),
);
