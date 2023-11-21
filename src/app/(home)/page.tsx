import { prismaClient } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Login from "./components/login";
import { WholeWord } from "lucide-react";
import Link from "next/link";

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

  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-bold">Acesso Negado!</h2>
        <p className="text-sm opacity-60">Faça login para ver suas salas</p>
        <div className="mt-4 flex flex-col gap-2">
          <Login />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-10 px-5">
        <p className="text-left text-2xl font-semibold ml-4">Salas</p>
      </div>

      <div className="mt-10 ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {roomsWithProfessors.map((room) => (
          <Link key={room.id} href={`/sala/${room.id}`}>
            <Card className="flex flex-col h-full">
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
          </Link>
        ))}
      </div>
    </div>
  );
}
