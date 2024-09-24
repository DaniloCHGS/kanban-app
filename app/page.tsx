"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useCreateNewBoard } from "@/store/useCreateNewBoard";
import { BsPlusCircle } from "react-icons/bs";

export default function Home() {
  const { setOpen } = useCreateNewBoard();

  return (
    <Card className="relative w-max overflow-hidden border-white/10 bg-theme-secondary">
      <CardHeader>
        <CardTitle className="text-white">
          Você ainda não criou nenhum quadro
        </CardTitle>
        <span className="text-sm text-muted-foreground">
          Clique{" "}
          <button
            className="cursor-pointer font-bold text-theme-purple transition hover:text-theme-purple/90"
            onClick={() => setOpen(true)}
          >
            aqui
          </button>{" "}
          para começar agora
        </span>
      </CardHeader>
      <BsPlusCircle className="absolute -bottom-2 -right-2 text-5xl text-white/30" />
    </Card>
  );
}
