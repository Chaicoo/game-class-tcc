import { PrismaClient } from "@prisma/client";
import { Room } from "@prisma/client";

type RoomType = Room;

const prisma = new PrismaClient();

async function main() {
  // Criar medalhas de honra
  const honorBadges = await prisma.honorBadge.createMany({
    data: [
      { name: "Administrador", color: "bg-red-500", icon: "UserCheck" },
      { name: "Moderador", color: "bg-yellow-500", icon: "UserShield" },
      { name: "Professor", color: "bg-green-500", icon: "UserGraduate" },
      { name: "Estudante", color: "bg-blue-500", icon: "User" },
    ],
  });

  // Criar salas e atividade
  // Buscar professor a partir do role teacher
  const professor = await prisma.user.findFirst({
    where: { role: "teacher" },
  });

  if (professor) {
    const roomData = [
      { code: "sala1", name: "Sala 1", professorId: professor.id },
      { code: "sala2", name: "Sala 2", professorId: professor.id },
      { code: "sala3", name: "Sala 3", professorId: professor.id },
      { code: "sala4", name: "Sala 4", professorId: professor.id },
    ];

    // Criar salas
    await prisma.room.createMany({
      data: roomData,
    });

    // Buscar as salas criadas
    const rooms: Array<RoomType> = await prisma.room.findMany({
      where: {
        OR: roomData.map((room) => ({
          code: room.code,
        })),
      },
    });

    // Criar atividade utilizando a primeira sala
    const activity = await prisma.activity.create({
      data: {
        description: "Atividade de exemplo",
        roomId: rooms[0].id,
      },
    });
  }

  console.log("Seed executado com sucesso!");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
