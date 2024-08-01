"use client";

import { Button } from "@/components/ui/button";
import { useAside } from "@/store/useAside";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export function HiddeAside() {
  const { setAsideOpen } = useAside();
  return (
    <button
      onClick={() => setAsideOpen(false)}
      className="ml-6 flex w-max items-center gap-2 py-2 text-sm text-white/50 transition hover:text-white"
    >
      <FaRegEyeSlash />
      Fechar menu
    </button>
  );
}

export function ShowAside() {
  const { setAsideOpen, asideOpen } = useAside();
  return (
    <Button
      data-show={asideOpen}
      onClick={() => setAsideOpen(true)}
      className="gap-2 rounded-full data-[show=true]:hidden"
    >
      <FaRegEye /> Abrir menu
    </Button>
  );
}
