"use client";

import { useSession } from "next-auth/react";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { status, data } = useSession();

export const isAuthenticated = () => status === "authenticated";