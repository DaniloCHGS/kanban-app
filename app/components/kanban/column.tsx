import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Column = "todo" | "doing" | "done";

interface ColumnProps extends ComponentProps<"section"> {
  type: Column;
  quantityTasks: number;
}

export function Column({
  className,
  type,
  quantityTasks = 0,
  children,
  ...props
}: Readonly<ColumnProps>) {
  return (
    <section
      className={twMerge("flex w-[300px] flex-col gap-4", className)}
      {...props}
    >
      <h3 className="flex items-center gap-2 text-xs uppercase text-white/50">
        <div
          data-type={type}
          className="h-3.5 w-3.5 rounded-full capitalize data-[type=doing]:bg-theme-purple data-[type=done]:bg-theme-kanban-done data-[type=todo]:bg-theme-kanban-todo"
        />
        {type} ({quantityTasks})
      </h3>
      {children}
    </section>
  );
}
