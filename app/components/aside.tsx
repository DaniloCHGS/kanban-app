"use client";

import { useAside } from "@/store/useAside";
import { HiddeAside } from "./toggle-show-aside";
import { MdOutlineViewKanban } from "react-icons/md";
import { useCreateNewBoard } from "@/store/useCreateNewBoard";

export function Aside() {
  const { asideOpen } = useAside();
  const { setOpen } = useCreateNewBoard();
  return (
    <aside
      data-open={asideOpen}
      className="row-span-2 hidden flex-col justify-between border-r border-white/10 bg-theme-secondary pb-8 pr-6 data-[open=true]:flex"
    >
      <div>
        <header className="flex h-[100px] items-center px-6 text-2xl font-semibold">
          Kanban
        </header>
        <span className="block pl-6 text-xs uppercase text-white/30">
          Todos os quadros (0)
        </span>

        <nav className="mt-5 flex w-full flex-col gap-2">
          <button
            className="flex w-full items-center gap-2 rounded-br-full rounded-tr-full py-3 pl-6 text-sm text-theme-purple transition hover:bg-theme-purple hover:text-white"
            onClick={() => setOpen(true)}
          >
            <MdOutlineViewKanban className="text-lg" />+ Criar novo quadro
          </button>
        </nav>
      </div>

      <HiddeAside />
    </aside>
  );
}
