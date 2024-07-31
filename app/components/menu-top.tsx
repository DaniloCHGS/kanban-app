import { Button } from "@/components/ui/button";
import { FaRegEye } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddNewTaks } from "./AddNewTaks";
import { ShowAside } from "./toggle-show-aside";

export function MenuTop() {
  return (
    <nav className="flex items-center justify-between border-b border-white/10 bg-theme-secondary px-6">
      <h2 className="text-lg font-medium">Platform Launch</h2>
      <div className="flex items-center gap-3">
        <ShowAside />
        <AddNewTaks />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <SlOptionsVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Opções</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
