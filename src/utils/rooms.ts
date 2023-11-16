import { prismaClient } from "@/lib/prisma";

export const getRooms = async () => {
    const rooms = await prismaClient.room.findMany();

  const roomsWithProfessors = await Promise.all(
    rooms.map(async (room) => {
      const professor = await prismaClient.user.findUnique({
        where: { id: room.professorId },
      });

      return { ...room, professor };
    })
  );

    return roomsWithProfessors;
}