"use client";

import { Button } from "@/components/ui/button";
import { LogInIcon, LogOutIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
    const handleLoginClick = async () => {
        await signIn();
    };

    const handleLogoutClick = async () => {
        await signOut();
    };
    const { status, data } = useSession();

    return (
        <>
            {status === "unauthenticated" ? (
                <Button
                    onClick={handleLoginClick}
                    variant="outline"
                    className="w-full text-left"
                >
                    <LogInIcon className="mr-2" size="16" />
                    Fazer login
                </Button>
            ) : (
                <Button
                    onClick={handleLogoutClick}
                    variant="outline"
                    className="w-full text-left"
                >
                    <LogOutIcon className="mr-2" size="16" />
                    Sair
                </Button>
            )}
        </>
    );
}

export default Login;
