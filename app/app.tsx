"use client";

import { useAside } from "@/store/useAside";
import { Aside } from "./components/aside";
import { MenuTop } from "./components/menu-top";
import { CreateNewBoard } from "./components/create-new-board";

export function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { asideOpen } = useAside();
  return (
    <div
      data-open={asideOpen}
      className="grid min-h-screen grid-cols-[1fr] grid-rows-[100px_1fr] bg-theme text-white data-[open=true]:grid-cols-[250px_1fr]"
    >
      <Aside />
      <MenuTop />
      <main className="p-5">{children}</main>
    </div>
  );
}
