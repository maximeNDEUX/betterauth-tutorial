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

export default function SignInPage() {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>
                    Welcome back! Please sign in to continue.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <SignInForm />
            </CardContent>

            <CardFooter className="flex justify-center">
                <p className="text-muted-foreground">
                    Don&apos;t have account yet?{" "}
                    <Link
                        href="/sign-up"
                        className="text-primary hover:underline"
                    >
                        Sign up here
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
