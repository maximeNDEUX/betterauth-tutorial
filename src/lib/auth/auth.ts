import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "sqlite",
        // TODO: Changer pour PosgreSQL
    }),
    emailAndPassword: {
        enabled: true
    }
})

