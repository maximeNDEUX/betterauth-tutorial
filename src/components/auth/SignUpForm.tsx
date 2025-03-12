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

import fr from "@/locales/fr";

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
                    toast.info(fr.auth.signUp.status.pending);
                },
                onSuccess: () => {
                    toast.success(fr.auth.signUp.status.successTitle, {
                        description: fr.auth.signUp.status.successRedirection,
                    });
                    form.reset();
                    router.push("/sign-in");
                },
                onError: () => {
                    toast.error(fr.auth.signUp.status.errorTitle, {
                        description: fr.auth.signUp.status.errorDescription,
                    });
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
                            <FormLabel>
                                {fr.auth.formItem.userName.title}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={
                                        fr.auth.formItem.userName.placeholder
                                    }
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                {fr.auth.formItem.userName.description}
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
                            <FormLabel>
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
                {/* Password confirmation FormField Input */}
                <FormField
                    control={form.control}
                    name="passwordConfirmation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {fr.auth.formItem.passwordConfirmation.title}
                            </FormLabel>{" "}
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder={
                                        fr.auth.formItem.passwordConfirmation
                                            .placeholder
                                    }
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full my-2">
                    {fr.auth.signUp.button}
                </Button>
            </form>
        </Form>
    );
}
