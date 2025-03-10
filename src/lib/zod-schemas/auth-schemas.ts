import { z } from "zod";

export const signUpFormSchema = z
    .object({
        name: z
            .string()
            .min(2, { message: "Name must be at least 2 characters long" })
            .max(50, { message: "Name cannot exceed 50 characters"}),

        email: z
            .string()
            .email( { message: "Please enter a valid email address"} ),

        password: z
            .string()
            .min(9, { message: "Password must be at least 9 characters long" })
            .max(50, { message: "Password cannot exceed 50 characters"}),

        passwordConfirmation: z
            .string()
            .min(9, { message: "Password must be at least 9 characters long" })
            .max(50, { message: "Password cannot exceed 50 characters"}),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
});


export const signInFormSchema = z
    .object({
        email: z
            .string()
            .email( { message: "Please enter a valid email address"} ),

        password: z
            .string()
            .min(9, { message: "Password must be at least 9 characters long" })
            .max(50, { message: "Password cannot exceed 50 characters"}),
});

