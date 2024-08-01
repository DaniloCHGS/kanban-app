"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Subtask } from "./subtask";
import { Label } from "@/components/ui/label";

export function ViewTask() {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const taskId = searchParams.get("task-id");

  useEffect(() => {
    if (taskId) {
      setOpen(true);
    }
  }, [searchParams, taskId]);

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
          <SheetTitle className="text-white">Teste 1</SheetTitle>
          <SheetDescription>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            ratione nam accusantium nulla eligendi nihil. Enim ullam odit vero
            magni quaerat minima ipsum nemo repellat harum, adipisci molestias,
            omnis cumque?
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <span className="text-xs">1 of 3 substasks</span>
            <div className="mt-2 space-y-2">
              <Subtask.Check title="Sub 1" />
              <Subtask.Check title="Sub 2" />
            </div>
          </div>
          <div className="my-2">
            <Label className="text-xs">Status</Label>
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
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Atualizar demanda</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
