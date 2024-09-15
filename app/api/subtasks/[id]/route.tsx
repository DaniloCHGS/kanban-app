import { prisma } from "@/services/db";
import { TypeSubsTasks } from "@/types";

export async function POST(req: Request, params: { params: { id: string } }) {
  const data: { body: TypeSubsTasks } = await req.json();

  try {
    const tasks = await prisma.subsTasks.findUnique({
      where: {
        id: parseInt(params.params.id),
      },
    });

    if (!tasks) {
      return Response.json({ status: 404, message: "SubTask bot found" });
    }

    const updatedTask = await prisma.subsTasks.update({
      data: {
        completed: data.body.completed,
        title: data.body.title,
        id: parseInt(data.body.id),
      },
      where: {
        id: parseInt(data.body.id),
      },
    });

    return Response.json({
      status: 201,
      message: "SubTask updated",
      updatedTask,
    });
  } catch (error) {
    return Response.json({ status: 500, message: "Internal server error" });
  }
}
