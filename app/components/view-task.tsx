"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { TypeTask } from "@/types";
import { api } from "@/services/api";

export function ViewTask() {
  const [open, setOpen] = useState<boolean>(false);
  const [task, setTask] = useState<TypeTask | null>(null);

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const taskId = searchParams.get("task-id");

  const getTask = useCallback(async () => {
    try {
      const response = await api.get(`/tasks/${taskId}`);
      setTask(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [taskId]);

  useEffect(() => {
    if (taskId) {
      setOpen(true);
    }
    getTask();
  }, [getTask, searchParams, taskId]);

  const subsTasksMemo = useMemo(() => {
    if (task?.subsTasks && task?.subsTasks?.length > 0) {
      return `${task.subsTasks?.filter((sub) => sub.completed).length} of ${task.subsTasks?.length} substasks`;
    }
    return "0 substasks";
  }, [task]);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);

    if (!isOpen && taskId) {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete("task-id");
      const newUrl = `${pathName}?${newSearchParams.toString()}`;
      router.push(newUrl);
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent className="border-white/10 bg-theme-secondary text-white">
        <SheetHeader>
          {task && <SheetTitle className="text-white">{task.title}</SheetTitle>}
          {task && <SheetDescription>{task.description}</SheetDescription>}
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <span className="text-xs">{subsTasksMemo}</span>
            <div className="mt-2 flex flex-col gap-2">
              {task?.subsTasks?.map((subTask) => (
                <span key={subTask.id} className="bg-theme p-2 text-xs">
                  {subTask.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
