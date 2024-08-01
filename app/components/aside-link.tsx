"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons/lib";

interface Props {
  href: string;
  title: string;
  icon: IconType;
}

export function AsideLink({ href, title, icon: Icon }: Readonly<Props>) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      data-active={pathName === href}
      className="flex w-full items-center gap-2 rounded-br-full rounded-tr-full py-3 pl-6 text-sm text-white/30 data-[active=true]:bg-theme-purple data-[active=true]:text-white data-[active=true]:hover:bg-theme-purple/90"
    >
      <Icon className="text-lg" />
      {title}
    </Link>
  );
}
