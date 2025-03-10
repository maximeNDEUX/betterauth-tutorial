"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { signInFormSchema } from "@/lib/zod-schemas/auth-schemas";
import { toast } from "sonner";
import { authClient } from "@/lib/auth/auth-client";

import { useRouter } from "next/navigation";

export default function SignInForm() {
    const router = useRouter();

    const form = useForm<z.infer<typeof signInFormSchema>>({
        resolver: zodResolver(signInFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof signInFormSchema>) {
        const { email, password } = values;
        await authClient.signIn.email(
            {
                email,
                password,
            },
            {
                onRequest: () => {
                    toast.info("Signing in…");
                },
                onSuccess: () => {
                    toast.success("Sign-in completed!", {
                        description:
                            "You are being redirected to the dashboard...",
                    });
                    form.reset();
                    router.push("/dashboard");
                },
                onError: () => {
                    toast.error("Failed to login!");
                },
            }
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <Button type="submit" className="w-full my-2">
                    Sign In
                </Button>
            </form>
        </Form>
    );
}
