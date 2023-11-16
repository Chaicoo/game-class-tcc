"use client";

import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const User = () => {
    const { status, data } = useSession();

    return (
        <>
             {status === "authenticated" && data?.user && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>

                    {data.user.image && (
                      <AvatarImage src={data.user.image} alt="profile image" />
                    )}
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="font-midium">{data.user.name}</p>
                    <p className="text-sm opacity-75">Bons estudos!</p>
                  </div>
                </div>
              </div>
            )}
        </>
    );
}

export default User;
