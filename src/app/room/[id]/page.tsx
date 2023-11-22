import { prismaClient } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

const Room = async ({ params }: any) => {
  const materialsRoom = [
    {
      id: 1,
      title: "Material 1",
      description: "Descrição do material 1",
      date: new Date,
      type: "activity",
    },
    {
      id: 2,
      title: "Material 2",
      description: "Descrição do material 2",
      date: new Date,
      type: "content",
    },
    { id: 3,
      title: "Material 3",
      description: "Descrição do material 3",
      date: new Date,
      type: "content",
    }
  ];

  const room = await prismaClient.room.findUnique({
    where: {
      id: params.id,
    },
  });

  const professor = await prismaClient.user.findUnique({
    where: { id: room?.professorId },
  });

  if (!room) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-bold">Sala não encontrada</h2>
        <p className="text-sm opacity-60">Entre em contato com o suporte</p>
      </div>
    );
  }

  return (
    <>
      <Card className="flex flex-col items-center justify-between p-[1.87rem] mt-4 h-40 ml-8 mr-8">
        <CardHeader className="text-center">
          <CardTitle>{room.name}</CardTitle>
          <CardDescription>Professor {professor?.name}</CardDescription>
          <CardDescription><p>Código: {room.code}</p></CardDescription>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
      <div className="flex flex-row w-full max-w-sm items-center gap-1.5 mt-4 m-auto">
        <Input type="text" id="coment" placeholder="Digite um comentário para a turma" />
        <Button variant="outline" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
      {
        materialsRoom.map((material) => (
          <Card key={material.id} className="flex flex-col justify-between mt-6 ml-12 mr-12 h-24">
            <CardHeader className="text-left">
              <CardTitle>{material.title}</CardTitle>
              <CardDescription>{material.description}</CardDescription>
            </CardHeader>
            <CardFooter>
            </CardFooter>
          </Card>
        ))
      }
    </>
  );
}

export default Room;
