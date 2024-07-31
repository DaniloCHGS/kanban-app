"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineViewKanban } from "react-icons/md";

interface Props {
  href: string;
  title: string;
}

export function AsideLink({ href, title }: Readonly<Props>) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      data-active={pathName === href}
      className="data-[active=true]:bg-theme-purple flex w-full items-center gap-2 rounded-br-full rounded-tr-full py-3 pl-6 text-sm text-white/30 data-[active=true]:text-white"
    >
      <MdOutlineViewKanban className="text-lg" />
      {title}
    </Link>
  );
}
