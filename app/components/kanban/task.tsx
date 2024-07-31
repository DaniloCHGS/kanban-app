"use client";

import { ComponentProps, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Subtask } from "../subtask";

interface TaskProps extends ComponentProps<"div"> {
  title: string;
  substasks?: {
    quantity: number;
    done: number;
  };
}

export function Task({
  className,
  substasks,
  title,
  ...props
}: Readonly<TaskProps>) {
  const substasksMemo = useMemo(() => {
    if (substasks) {
      return `${substasks.done} of ${substasks.quantity} substasks`;
    }
    return null;
  }, [substasks]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={twMerge(
            "cursor-pointer rounded-md border-b border-white/10 bg-theme-secondary px-3 py-4 transition hover:bg-theme-secondary/75",
            className,
          )}
          {...props}
        >
          <header className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            {substasksMemo && (
              <p className="text-xs text-white/30">{substasksMemo}</p>
            )}
          </header>
        </div>
      </DialogTrigger>
      <DialogContent className="border-theme-secondary bg-theme-secondary text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-xs text-white/30">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            ratione nam accusantium nulla eligendi nihil. Enim ullam odit vero
            magni quaerat minima ipsum nemo repellat harum, adipisci molestias,
            omnis cumque?
          </p>
          <div className="">
            <span className="text-xs">{substasksMemo}</span>

            <div className="mt-2 space-y-2">
              <Subtask.Check title="Sub 1" />
              <Subtask.Check title="Sub 2" />
            </div>
          </div>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full rounded-full">
            Update Taks
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
