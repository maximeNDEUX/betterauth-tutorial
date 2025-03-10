"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { signUpFormSchema } from "@/lib/zod-schemas/auth-schemas";
import { authClient } from "@/lib/auth/auth-client";
import { toast } from "sonner";

import { useRouter } from "next/navigation";

export default function SignUpForm() {
    const router = useRouter();

    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: "",
        },
    });

    async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
        const { name, email, password } = values;
        await authClient.signUp.email(
            {
                email,
                password,
                name,
            },
            {
                onRequest: () => {
                    toast.info("Account creation…");
                },
                onSuccess: () => {
                    toast.success("Account created!", {
                        description:
                            "You are being redirected to the sign-in form...",
                    });
                    form.reset();
                    router.push("/sign-in");
                },
                onError: () => {
                    toast.error("Failed to create account!");
                },
            }
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Name FormField Input */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Email FormField Input */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="email@example.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Password FormField Input */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Your password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Password confirmation FormField Input */}
                <FormField
                    control={form.control}
                    name="passwordConfirmation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password Confirmation</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Password Confirmation"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full my-2">
                    Sign Up
                </Button>
            </form>
        </Form>
    );
}
