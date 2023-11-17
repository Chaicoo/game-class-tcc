import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { DoorOpen } from "lucide-react";
import { isAuthenticated } from "@/utils/isAuthenticated";

export default async function CreateRoom() {
    const session = await getServerSession(authOptions);

    const userTeacher = await prismaClient.user.findMany({
        where: { role: "teacher", id: session?.user?.id },
    });

    const isTeacher = userTeacher.length > 0;

    return (
        <>
            {
                isTeacher ? (
                    <Button variant="outline" className="w-full text-left">
                        <DoorOpen className="mr-2" size="16" />
                        Criar uma sala
                    </Button>
                ) : (
                    <Button variant="outline" className="w-full text-left">
                        <DoorOpen className="mr-2" size="16" />
                        Entrar numa sala
                    </Button>
                )
            }
        </>
    );
}
