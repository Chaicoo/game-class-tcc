import { prismaClient } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Home() {
  const rooms = await prismaClient.room.findMany();
  
  const roomsWithProfessors = await Promise.all(
    rooms.map(async (room) => {
      const professor = await prismaClient.user.findUnique({
        where: { id: room.professorId },
      });

      return { ...room, professor };
    })
  );
  return (
    <div>
      <div className="mt-10 px-5">
        <p className="text-left text-2xl font-semibold ml-4">Salas</p>
      </div>

      <div className="mt-10 ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {roomsWithProfessors.map((room) => (
          <Card key={room.id} className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4">
              {room.professor && (
                <div className="flex items-center">
                  <div className="mr-4">
                    <Avatar>
                      <AvatarFallback>
                        {room.professor.name?.[0].toUpperCase()}
                      </AvatarFallback>
                      {room.professor.image && (
                        <AvatarImage src={room.professor.image} alt="profile image" />
                      )}
                    </Avatar>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{room.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Professor: {room.professor.name}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
