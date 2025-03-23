import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import fr from "@/locales/fr";

export default function SignUpButton() {
    return (
        <Link
            href="/sign-up"
            className={buttonVariants({ variant: "secondary" })}
        >
            {fr.auth.signUp.button}
        </Link>
    );
}
