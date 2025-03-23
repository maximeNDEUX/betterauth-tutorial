import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import fr from "@/locales/fr";

export default function SignInButton() {
    return (
        <Link
            href="/sign-in"
            className={buttonVariants({ variant: "outline" })}
        >
            {fr.auth.signIn.button}
        </Link>
    );
}
