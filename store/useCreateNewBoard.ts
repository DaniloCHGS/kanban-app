import { create } from "zustand";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useCreateNewBoard = create<Props>((set) => {
  return {
    open: false,
    setOpen: (open) => set({ open }),
  };
});
