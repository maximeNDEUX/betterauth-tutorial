import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import SignUpForm from "@/components/auth/SignUpForm";
import { UserPlusIcon } from "lucide-react";

export default function SignInPage() {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <UserPlusIcon />
                    Création de compte
                </CardTitle>
                <CardDescription>
                    Créez un compte pour accéder à l&apos;application
                </CardDescription>
            </CardHeader>

            <CardContent>
                <SignUpForm />
            </CardContent>

            <CardFooter className="flex justify-center">
                <p className="text-muted-foreground">
                    Vous avez déjà un compte ?{" "}
                    <Link
                        href="/sign-in"
                        className="text-primary hover:underline"
                    >
                        Connectez-vous ici
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
