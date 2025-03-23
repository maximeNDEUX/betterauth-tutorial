import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
        // TODO: Changer pour postgresql
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [nextCookies()],
});
