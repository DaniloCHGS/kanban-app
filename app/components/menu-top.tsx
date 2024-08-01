import { AddNewTaks } from "./add-new-taks";
import { ShowAside } from "./toggle-show-aside";

export function MenuTop() {
  return (
    <nav className="flex items-center justify-between border-b border-white/10 bg-theme-secondary pl-6 pr-14">
      <h2 className="text-lg font-medium">Platform Launch</h2>
      <div className="flex items-center gap-3">
        <ShowAside />
        <AddNewTaks />
      </div>
    </nav>
  );
}
