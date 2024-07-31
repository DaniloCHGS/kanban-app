import { ReactNode } from "react";

export function Kanban({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="flex w-full gap-6 overflow-x-hidden">{children}</div>;
}
