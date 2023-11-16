"use client";

import { BookText, DoorOpen, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import { ModeToggle } from "./theme-button";

const Header = () => {
    const { status, data } = useSession();

    const handleLoginClick = async () => {
        await signIn();
    }

    const handleLogoutClick = async () => {
        await signOut();
    }

    const userHonorBadges = {
        "admin": {
            "name": "Administrador",
            "color": "bg-red-500",
            "icon": "UserCheck"
        },
        "moderator": {
            "name": "Moderador",
            "color": "bg-yellow-500",
            "icon": "UserShield"
        },
        "teacher": {
            "name": "Professor",
            "color": "bg-green-500",
            "icon": "UserGraduate"
        },
        "student": {
            "name": "Estudante",
            "color": "bg-blue-500",
            "icon": "User"
        }
    }

    return <Card className="flex justify-between p-[1.87rem] items-center">
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                    <MenuIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
                <SheetHeader className="flex flex-row justify-between text-left text-lg font-semibold mt-7">
                    Menu
                    <div className="text-right">
                        <ModeToggle />
                    </div>
                </SheetHeader>

                <div className="mt-4 flex flex-col gap-2">
                    <Button variant="outline" className="w-full text-left">
                        <HomeIcon className="mr-2" size="16" />
                        Salas
                    </Button>
                    <Button variant="outline" className="w-full text-left">
                        <BookText className="mr-2" size="16" />
                        Atividades
                    </Button>
                    <Button variant="outline" className="w-full text-left">
                        <DoorOpen className="mr-2" size="16" />
                        Entrar numa sala
                    </Button>
                </div>
            </SheetContent>
        </Sheet>

        <h1 className="font-semibold text-lg"><span className="text-primary">Game</span> Class</h1>

        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                    <UserIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side="right">
                <SheetHeader className="flex flex-row justify-between text-left text-lg font-semibold mt-7">
                    {
                        status === "authenticated" && data?.user && (
                            <div className="flex flex-col">
                                <div className="py-4 flex items-center gap-2">
                                    <Avatar>
                                        <AvatarFallback>
                                            {data.user.name?.[0].toUpperCase()}
                                        </AvatarFallback>

                                        {
                                            data.user.image && (
                                                <AvatarImage src={data.user.image} alt="profile image" />
                                            )
                                        }
                                    </Avatar>

                                    <div className="flex flex-col">
                                        <p className="font-midium">{data.user.name}</p>
                                        <p className="text-sm opacity-75">Bons estudos!</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </SheetHeader>

                <Separator />

                <div className="mt-2">
                    {
                        status === "authenticated" && data?.user && (
                            <div className="flex flex-col gap-2">
                                {/* {
                                    data.user.honorBadge.map((honorBadge, index) => (
                                        <div key={index} className="flex flex-row items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${userHonorBadges[honorBadge].color}`} />
                                            <p>{userHonorBadges[honorBadge].name}</p>
                                        </div>
                                    ))
                                } */}
                            </div>
                        )
                    }
                </div>

                <div className="mt-4 flex flex-col gap-2">
                    {
                        status === "unauthenticated" ?
                            <Button onClick={handleLoginClick} variant="outline" className="w-full text-left">
                                <LogInIcon className="mr-2" size="16" />
                                Fazer login
                            </Button> :
                            <Button onClick={handleLogoutClick} variant="outline" className="w-full text-left">
                                <LogOutIcon className="mr-2" size="16" />
                                Sair
                            </Button>
                    }
                </div>
            </SheetContent>
        </Sheet>
    </Card>;
}

export default Header;