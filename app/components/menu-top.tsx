"use client";

import { Button } from "@/components/ui/button";
import { AddNewTaks } from "./add-new-taks";
import { ShowAside } from "./toggle-show-aside";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

export function MenuTop() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-between border-b border-white/10 bg-theme-secondary pl-6 pr-14">
      <h2 className="text-lg font-medium">Demandas</h2>
      <div className="flex items-center gap-3">
        <ShowAside />
        <Button className="gap-2 rounded-full" onClick={() => setOpen(true)}>
          <FaPlus /> Criar nova demanda
        </Button>
        <AddNewTaks open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
}
