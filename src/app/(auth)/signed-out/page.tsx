import SignInButton from "@/components/layout/AuthButtons/SignInButton";
import HomeButton from "@/components/HomeButton";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import fr from "@/locales/fr";
import { LockKeyholeIcon } from "lucide-react";

export default function SignedOutPage() {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <LockKeyholeIcon />
                    {fr.auth.signOut.page.title}
                </CardTitle>
            </CardHeader>

            <CardContent> {fr.auth.signOut.page.description}</CardContent>

            <CardFooter className="flex justify-center gap-4">
                <HomeButton />
                <SignInButton />
            </CardFooter>
        </Card>
    );
}
