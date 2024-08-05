"use client";

import { useCallback, useEffect, useMemo } from "react";
import { Kanban } from "../components/kanban";
import { Column } from "../components/kanban/column";
import { Task } from "../components/kanban/task";
import { ViewTask } from "../components/view-task";
import { api } from "@/services/api";
import { useTasks } from "@/store/useTasks";

export default function Home() {
  const { tasks, setTasks } = useTasks();

  const getTasks = useCallback(async () => {
    const response = await api.get("/tasks");
    setTasks(response.data);
  }, [setTasks]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const todoTasks = useMemo(() => {
    return tasks.length > 0
      ? tasks.filter((task) => task.status === "TODO")
      : [];
  }, [tasks]);

  const doingTasks = useMemo(() => {
    return tasks.length > 0
      ? tasks.filter((task) => task.status === "DOING")
      : [];
  }, [tasks]);

  const doneTasks = useMemo(() => {
    return tasks.length > 0
      ? tasks.filter((task) => task.status === "DONE")
      : [];
  }, [tasks]);

  return (
    <div className="flex gap-6">
      <Kanban>
        <Column type="todo" quantityTasks={todoTasks.length}>
          {todoTasks.map((task) => (
            <Task key={task.id} taskId={task.id ?? 0} title={task.title} />
          ))}
        </Column>
        <Column type="doing" quantityTasks={doingTasks.length}>
          {doingTasks.map((task) => (
            <Task key={task.id} taskId={task.id ?? 0} title={task.title} />
          ))}
        </Column>
        <Column type="done" quantityTasks={doneTasks.length}>
          {doneTasks.map((task) => (
            <Task key={task.id} taskId={task.id ?? 0} title={task.title} />
          ))}
        </Column>
      </Kanban>
      <ViewTask />
    </div>
  );
}
