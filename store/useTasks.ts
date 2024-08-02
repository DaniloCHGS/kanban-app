import { TypeTask } from "@/types";
import { create } from "zustand";

interface Props {
  tasks: TypeTask[];
  setTasks: (tasks: TypeTask[]) => void;
}

export const useTasks = create<Props>((set) => {
  return {
    tasks: [],
    setTasks: (tasks) => set({ tasks }),
  };
});
