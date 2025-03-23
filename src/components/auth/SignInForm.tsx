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

import { KeyRoundIcon, LogInIcon, MailIcon } from "lucide-react";
import fr from "@/locales/fr";

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
                    toast.info(fr.auth.signIn.status.pending);
                },
                onSuccess: () => {
                    toast.success(fr.auth.signIn.status.successTitle, {
                        description: fr.auth.signIn.status.successRedirection,
                    });
                    form.reset();
                    router.push("/dashboard");
                },
                onError: () => {
                    toast.error(fr.auth.signIn.status.errorTitle, {
                        description: fr.auth.signIn.status.errorDescription,
                    });
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
                            <FormLabel>
                                <MailIcon className="h-4 w-4" />
                                {fr.auth.formItem.email.title}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={
                                        fr.auth.formItem.email.placeholder
                                    }
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
                            <FormLabel>
                                <KeyRoundIcon className="h-4 w-4" />
                                {fr.auth.formItem.password.title}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder={
                                        fr.auth.formItem.password.placeholder
                                    }
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full my-2">
                    <LogInIcon />
                    {fr.auth.signIn.button}
                </Button>
            </form>
        </Form>
    );
}
