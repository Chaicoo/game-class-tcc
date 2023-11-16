
import {
  BookText,
  DoorOpen,
  HomeIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { Separator } from "./separator";
import { ModeToggle } from "./theme-button";
import HonorBadge from "@/app/(home)/components/honor-badge";
import User from "@/app/(home)/components/user";
import Login from "@/app/(home)/components/login";

const Header = () => {

  return (
    <Card className="flex items-center justify-between p-[1.87rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="mt-7 flex flex-row justify-between text-left text-lg font-semibold">
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

            {/* {
              status === "authenticated" && data?.user && (
                <div className="flex flex-col gap-2">
                  {data.user.role === "student" ? (
                    <Button variant="outline" className="w-full text-left">
                      <DoorOpen className="mr-2" size="16" />
                      Entrar numa sala
                    </Button>
                  ) : (
                    data.user.role === "teacher" && (
                      <Button variant="outline" className="w-full text-left">
                        <DoorOpen className="mr-2" size="16" />
                        Criar uma sala
                      </Button>
                    )
                  )}
                </div>
              )
            } */}
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">Game</span> Class
      </h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <UserIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <SheetHeader className="mt-7 flex flex-row justify-between text-left text-lg font-semibold">
            <User />
          </SheetHeader>

          <Separator />

          <div className="mt-2">
            <HonorBadge />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Login />
          </div>
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export default Header;
