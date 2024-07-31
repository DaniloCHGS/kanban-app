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
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AddNewTaks() {
  const [substasks, setSubstasks] = useState<string[]>([]);

  function addNewSubstasks() {
    const newSubstasks: string = uuidv4();
    setSubstasks([...substasks, newSubstasks]);
  }

  function removeSubstasks(sub: string) {
    const filteredSubstasks: string[] = substasks.filter(
      (task) => task !== sub,
    );
    setSubstasks([...filteredSubstasks]);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 rounded-full">
          <FaPlus /> Add New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="border-theme-secondary bg-theme-secondary text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label className="text-xs" htmlFor="title">
              Title
            </Label>
            <Input id="title" />
          </div>
          <div className="grid gap-2">
            <Label className="text-xs" htmlFor="description">
              Description
            </Label>
            <Textarea id="description" rows={5} className="resize-none" />
          </div>
          <div className="grid gap-2">
            <Label className="text-xs">Subtasks</Label>
            <div className="grid max-h-[168px] gap-2 overflow-y-auto">
              {substasks.length > 0 &&
                substasks.map((substasks) => (
                  <Subtask.Add
                    key={substasks}
                    onRemove={() => removeSubstasks(substasks)}
                  />
                ))}
            </div>
            <Button
              onClick={addNewSubstasks}
              className="rounded-full bg-white text-theme-purple hover:text-white"
            >
              <FaPlus /> Add New Subtask
            </Button>
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
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full rounded-full">
            Create Taks
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
