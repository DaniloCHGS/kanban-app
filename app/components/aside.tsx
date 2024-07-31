import { AsideLink } from "./aside-link";

export function Aside() {
  return (
    <aside className="row-span-2 border-r border-white/10 bg-theme-secondary pr-6">
      <header className="flex h-[100px] items-center px-6 text-2xl font-semibold">
        Kanban
      </header>
      <span className="block pl-6 text-sm text-white/30">All Boards (3)</span>

      <nav className="mt-5 flex w-full flex-col">
        <AsideLink href="/" title="Platform Launch" />
      </nav>
    </aside>
  );
}
