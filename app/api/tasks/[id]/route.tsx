import { prisma } from "@/services/db";

export async function GET(
  request: Request,
  params: { params: { id: string } },
) {
  try {
    const tasks = await prisma.task.findUnique({
      where: {
        id: parseInt(params.params.id),
      },
      include: {
        subsTasks: true,
      },
    });
    return Response.json(tasks);
  } catch (error) {
    return Response.json({ status: 500, message: "Internal server error" });
  }
}
