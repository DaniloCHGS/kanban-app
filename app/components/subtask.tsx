"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentProps, useEffect, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

interface AddProps extends ComponentProps<"input"> {
  onRemove: () => void;
}

function Add({ className, onRemove, ...props }: Readonly<AddProps>) {
  return (
    <div className="mb-2 mr-3 flex gap-2 only:mb-0">
      <Input {...props} />
      <button className="px-2 text-lg font-bold" onClick={onRemove}>
        <RiCloseLargeFill />
      </button>
    </div>
  );
}

interface CheckProps {
  title: string;
  completed?: boolean;
  onChange: (value: boolean) => void;
}

function Check({
  title,
  completed: completedProps = false,
  onChange,
}: Readonly<CheckProps>) {
  const [completed, setCompleted] = useState<boolean>(completedProps);

  useEffect(() => {
    setCompleted(completedProps);
  }, [completedProps]);

  useEffect(() => {
    onChange(completed);
  }, [completed, onChange]);

  return (
    <div
      data-completed={completed}
      className="group flex items-center gap-2 bg-theme p-2"
    >
      <Checkbox
        id={title}
        onClick={() => setCompleted((oldState) => !oldState)}
      />
      <Label
        htmlFor={title}
        className="flex-1 cursor-pointer text-xs font-medium group-data-[completed=true]:text-white/30 group-data-[finished=true]:line-through"
      >
        {title}
      </Label>
    </div>
  );
}

export const Subtask = {
  Add,
  Check,
};
