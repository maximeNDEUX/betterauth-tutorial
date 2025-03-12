import { z } from "zod";
import fr from "@/locales/fr";

export const signUpFormSchema = z
    .object({
        name: z
            .string()
            .min(3, { message: fr.auth.zod.userNameMinLength })
            .max(50, { message: fr.auth.zod.userNameMaxLength }),

        email: z.string().email({ message: fr.auth.zod.emailInvalid }),

        password: z
            .string()
            .min(9, { message: fr.auth.zod.passwordMinLength })
            .max(50, { message: fr.auth.zod.passwordMaxLength }),

        passwordConfirmation: z
            .string()
            .min(1, { message: fr.auth.zod.passwordConfirmationRequired }),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
        message: fr.auth.zod.passwordConfirmationMatch,
        path: ["passwordConfirmation"],
    });

export const signInFormSchema = z.object({
    email: z.string().email({ message: fr.auth.zod.emailInvalid }),

    password: z.string().min(1, { message: fr.auth.zod.passwordRequired }),
});
