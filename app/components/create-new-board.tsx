"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CreateNewBoard({ open, setOpen }: Readonly<Props>) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="border-theme-secondary bg-theme-secondary text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar novo quadro</DialogTitle>
        </DialogHeader>
        <form id="create-task" className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label
              className="flex items-center justify-between text-xs"
              htmlFor="title"
            >
              Titulo
            </Label>
            <Input id="title" />
          </div>
        </form>
        <DialogFooter>
          <Button
            type="submit"
            form="create-task"
            className="w-full rounded-full"
          >
            Criar novo quadro
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
