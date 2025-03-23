import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import SignInForm from "@/components/auth/SignInForm";

import { UserCheckIcon } from "lucide-react";
import fr from "@/locales/fr";

export default function SignInPage() {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <UserCheckIcon />
                    {fr.auth.signIn.form.title}
                </CardTitle>
                <CardDescription>
                    {fr.auth.signIn.form.description}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <SignInForm />
            </CardContent>

            <CardFooter className="flex justify-center">
                <p className="text-muted-foreground">
                    {fr.auth.signIn.form.noAccountYet}{" "}
                    <Link
                        href="/sign-up"
                        className="text-primary hover:underline"
                    >
                        {fr.auth.signIn.form.accountCreationLink}
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
