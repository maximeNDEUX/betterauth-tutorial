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

export default function SignInPage() {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>
                    Create your account to get started.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <SignUpForm />
            </CardContent>

            <CardFooter className="flex justify-center">
                <p className="text-muted-foreground">
                    Do you already have an account?{" "}
                    <Link
                        href="/sign-in"
                        className="text-primary hover:underline"
                    >
                        Sign in here
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
