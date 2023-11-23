import { prismaClient } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, BookCopyIcon, BookOpenIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Ranking from "./components/ranking";

const Room = async ({ params }: any) => {
  const materialsRoom = [
    {
      id: 1,
      description: "Atividade avaliativa referente a N2",
      date: new Date,
      type: "activity",
    },
    {
      id: 2,
      description: "Material apresentado em sala referente aos assuntos da etapa N2",
      date: new Date,
      type: "content",
    },
    {
      id: 3,
      description: "Slides apresentados em sala",
      date: new Date,
      type: "content",
    }
  ];

  const coments = [
    {
      id: 1,
      date: new Date,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis a cras semper auctor neque vitae tempus quam. Venenatis cras sed felis eget velit aliquet sagittis id. Velit ut tortor pretium viverra suspendisse. Neque viverra justo nec ultrices dui sapien eget mi proin. A condimentum vitae sapien pellentesque habitant morbi.",
      idUser: 1,
    },
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
      <Badge variant="outline" className="py-3 flex justify-end items-center gap-7 rounded-sm p-[1.87rem] mt-4 max-h-full ml-8 mr-8">
        <CardHeader className="text-center mx-auto">
          <CardTitle>{room.name}</CardTitle>
          <CardDescription>Professor {professor?.name}</CardDescription>
          <CardDescription ><p>Código: {room.code}</p></CardDescription>
        </CardHeader>
      </Badge>

      <div className="flex flex-row w-full max-w-sm items-center gap-1.5 mt-4 m-auto">
        <Input type="text" id="coment" placeholder="Digite um comentário para a turma" />
        <Button variant="outline" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-8 mx-auto flex  flex-col items-center justify-center">
        <Ranking />
      </div>
      {
        coments.map((coment) => (
          <Badge key={coment.id} variant="outline" className="flex flex-col rounded-sm justify-between mt-6 ml-12 mr-12">
            <div className="flex flex-row justify-between ">
              <CardHeader className="text-left">
                <Avatar>
                  <AvatarFallback>
                  </AvatarFallback>

                  {professor?.image && (
                    <AvatarImage src={professor?.image} alt="profile image" />
                  )}
                </Avatar>
                <CardDescription>{professor?.name} comentou:</CardDescription>
                <CardDescription>{coment.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <CardDescription>Postado em: {new Date(coment.date).toLocaleDateString()}</CardDescription>
              </CardFooter>
            </div>
            <div className="flex flex-row w-full max-w-sm items-center gap-1.5 mt-2 m-auto mb-2">
              <Input type="text" id="coment" placeholder="Responder" />
              <Button variant="outline" size="icon">
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </Badge>
        ))
      }
      {
        materialsRoom.map((material) => (
          <Card key={material.id} className="flex justify-between mt-6 ml-12 mr-12">
            <CardHeader className="text-left">
              <CardTitle className="flex flex-row gap-4">
                {material.type === 'activity' && (
                  <BookOpenIcon className="h-6 w-6" />
                )}
                {material.type === 'content' && (
                  <BookCopyIcon className="h-6 w-6" />
                )}
                {professor?.name} postou {
                  material.type === "activity" ? "um atividade" : " um conteúdo"
                }
              </CardTitle>
              <CardDescription>{material.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <CardDescription>Postado em: {new Date(material.date).toLocaleDateString()}</CardDescription>
            </CardFooter>
          </Card>
        ))
      }
    </>
  );
}

export default Room;
