"use client";

import { ComponentProps, useCallback } from "react";
import { twMerge } from "tailwind-merge";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface TaskProps extends ComponentProps<"button"> {
  title: string;
  id: string;
  substasks?: {
    quantity: number;
    done: number;
  };
}

export function Task({
  className,
  substasks,
  title,
  id,
  ...props
}: Readonly<TaskProps>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <button
      onClick={() =>
        router.push(`${pathname}?${createQueryString("task-id", id)}`)
      }
      className={twMerge(
        "cursor-pointer rounded-md border-b border-white/10 bg-theme-secondary px-3 py-4 text-start transition hover:bg-theme-secondary/75",
        className,
      )}
      {...props}
    >
      <header className="flex flex-col gap-1">
        <h4 className="text-sm font-semibold">{title}</h4>
        {substasks && (
          <p className="text-xs text-white/30">{`${substasks.done} of ${substasks.quantity} substasks`}</p>
        )}
      </header>
    </button>
  );
}
