"use client";

import { useAside } from "@/store/useAside";
import { AsideLink } from "./aside-link";
import { HiddeAside } from "./toggle-show-aside";

export function Aside() {
  const { asideOpen } = useAside();
  return (
    <aside
      data-open={asideOpen}
      className="row-span-2 hidden flex-col justify-between border-r border-white/10 bg-theme-secondary pb-8 pr-6 data-[open=true]:flex"
    >
      <div>
        <header className="flex h-[100px] items-center px-6 text-2xl font-semibold">
          Kanban
        </header>
        <span className="block pl-6 text-sm uppercase text-white/30">
          All Boards (3)
        </span>

        <nav className="mt-5 flex w-full flex-col">
          <AsideLink href="/" title="Platform Launch" />
        </nav>
      </div>

      <HiddeAside />
    </aside>
  );
}
