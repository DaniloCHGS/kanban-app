import { z } from "zod";

export const StatusTaskSchema = z.enum(["TODO", "DOING", "DONE"]);

export type TypeStatusTask = z.infer<typeof StatusTaskSchema>;

export const statusTask: Array<TypeStatusTask> = ["DOING", "DONE", "TODO"];

export const SubsTasksSchema = z.object({
  id: z.string(),
  title: z.string(),
  completed: z.boolean().optional().default(false),
  taskId: z.string().nullable(),
});

export type TypeSubsTasks = z.infer<typeof SubsTasksSchema>;

export const TaskSchema = z.object({
  id: z.number().optional(),
  title: z
    .string()
    .min(5, { message: "Titulo deve conter no mínimo 5 letras" }),
  description: z.string().optional(),
  status: StatusTaskSchema.default("TODO"),
  subsTasks: z.array(SubsTasksSchema).optional(),
});

export type TypeTask = z.infer<typeof TaskSchema>;
