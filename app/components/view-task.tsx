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
import { TaskSchema, TypeTask } from "@/types";
import { api } from "@/services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Subtask } from "./subtask";

export function ViewTask() {
  const [open, setOpen] = useState<boolean>(false);
  const [task, setTask] = useState<TypeTask | null>(null);

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const taskId = searchParams.get("task-id");

  const { register, setValue, handleSubmit, formState, reset } =
    useForm<TypeTask>({
      resolver: zodResolver(TaskSchema),
    });

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

  useEffect(() => {
    if (task) {
      setValue("description", task.description);
      setValue("id", task.id);
      setValue("status", task.status);
      setValue("title", task.title);
      setValue("subsTasks", task.subsTasks);
    }
  }, [setValue, task]);

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

  async function updateSubtask(subTaskId: string, value: boolean) {
    try {
      const response = await api.post(`/subtasks/${subTaskId}`);
      console.log(response.data);
    } catch (error) {}
  }

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
                <Subtask.Check
                  key={subTask.id}
                  title={subTask.title}
                  completed={subTask.completed}
                  onChange={(value) => updateSubtask(subTask.id, value)}
                />
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
