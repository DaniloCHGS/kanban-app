"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaPlus } from "react-icons/fa6";
import { Subtask } from "./subtask";
import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useForm } from "react-hook-form";
import {
  TypeTask,
  TaskSchema,
  statusTask,
  TypeStatusTask,
  TypeSubsTasks,
} from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/services/api";
import { useToast } from "@/components/ui/use-toast";
import { useTasks } from "@/store/useTasks";

export function AddNewTaks() {
  const [substasks, setSubstasks] = useState<TypeSubsTasks[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const { tasks, setTasks } = useTasks();
  const { toast } = useToast();

  const { register, setValue, handleSubmit, formState, reset } =
    useForm<TypeTask>({
      resolver: zodResolver(TaskSchema),
    });

  useEffect(() => {
    const substasksWithTitle = substasks.filter(
      (task) => task.title.trim().length > 0,
    );

    setValue("subsTasks", substasksWithTitle);
  }, [setValue, substasks]);

  function addNewSubstasks() {
    const newSubstasks: TypeSubsTasks = {
      id: uuidv4(),
      title: "",
      completed: false,
      taskId: null,
    };
    setSubstasks([...substasks, newSubstasks]);
  }

  const setValueOnSubstasks = useCallback(
    (id: string, value: string) => {
      const subTask = substasks.find((sub) => sub.id === id);

      if (subTask) {
        const subTaskUpdated: TypeSubsTasks = {
          ...subTask,
          title: value,
        };

        setSubstasks((prev) =>
          prev.map((sub) => (sub.id === id ? subTaskUpdated : sub)),
        );
      }
    },
    [substasks],
  );

  function removeSubstasks(id: string) {
    const filteredSubstasks: TypeSubsTasks[] = substasks.filter(
      (task) => task.id !== id,
    );
    setSubstasks([...filteredSubstasks]);
  }

  async function addNewTask(data: Omit<TypeTask, "id">) {
    try {
      const response = await api.post("/tasks", {
        body: data,
      });

      setTasks([...tasks, response.data]);
      reset();

      toast({
        title: "Demanda criada com sucesso",
      });
    } catch (error) {
      toast({
        title: "Demanda criada com sucesso",
        variant: "destructive",
      });
    }
  }

  const handleClose = (value: boolean) => {
    setOpen(value);
    reset();
    setSubstasks([]);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>
        <Button className="gap-2 rounded-full" onClick={() => setOpen(true)}>
          <FaPlus /> Criar nova demanda
        </Button>
      </DialogTrigger>
      <DialogContent className="border-theme-secondary bg-theme-secondary text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar nova demanda</DialogTitle>
        </DialogHeader>
        <form
          id="create-task"
          onSubmit={handleSubmit(addNewTask)}
          className="grid gap-4 py-4"
        >
          <div className="grid gap-2">
            <Label
              className="flex items-center justify-between text-xs"
              htmlFor="title"
            >
              Title
              {formState?.errors?.title && (
                <span className="text-xs text-red-500">
                  {formState.errors.title.message}
                </span>
              )}
            </Label>
            <Input id="title" {...register("title")} />
          </div>
          <div className="grid gap-2">
            <Label className="text-xs" htmlFor="description">
              Description
            </Label>
            <Textarea
              id="description"
              rows={5}
              className="resize-none"
              {...register("description")}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-xs">Subtasks</Label>
            <ScrollArea className="max-h-[168px]">
              {substasks.length > 0 &&
                substasks.map((substasks) => (
                  <Subtask.Add
                    key={substasks.id}
                    onChange={(event) =>
                      setValueOnSubstasks(substasks.id, event.target.value)
                    }
                    onRemove={() => removeSubstasks(substasks.id)}
                  />
                ))}
            </ScrollArea>
            <Button
              type="button"
              onClick={addNewSubstasks}
              className="rounded-full bg-white text-theme-purple hover:text-white"
            >
              <FaPlus /> Add New Subtask
            </Button>
            <div className="my-2">
              <Label className="text-xs">Status</Label>
              <Select
                onValueChange={(value: TypeStatusTask) =>
                  setValue("status", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder={statusTask[2]} />
                </SelectTrigger>
                <SelectContent>
                  {statusTask.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button
            type="submit"
            form="create-task"
            className="w-full rounded-full"
          >
            Create Taks
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
