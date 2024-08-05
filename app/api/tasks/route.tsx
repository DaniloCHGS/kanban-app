import { prisma } from "@/services/db";
import { TypeTask } from "@/types";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        subsTasks: true,
      },
    });
    return Response.json(tasks);
  } catch (error) {
    return Response.json({ status: 500, message: "Internal server error" });
  }
}

export async function POST(req: NextRequest) {
  const data: { body: TypeTask } = await req.json();

  const hasTask = await prisma.task.findUnique({
    where: {
      title: data.body.title,
    },
  });

  if (hasTask) {
    return Response.json({ status: 409, messsage: "Task already exists" });
  }

  const task = await prisma.task.create({
    data: {
      title: data.body.title,
      description: data.body.description,
      status: data.body.status,
    },
  });

  if (data.body?.subsTasks) {
    await Promise.all(
      data.body.subsTasks.map(async (subtask) => {
        return await prisma.subsTasks.create({
          data: {
            title: subtask.title,
            completed: subtask.completed,
            taskId: task.id,
          },
        });
      }),
    );
  }

  return Response.json(task);
}
