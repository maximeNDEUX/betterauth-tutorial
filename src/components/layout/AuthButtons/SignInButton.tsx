import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function SignInButton() {
    return (
        <Link
            href="/sign-in"
            className={buttonVariants({ variant: "secondary" })}
        >
            Sign-In
        </Link>
    );
}
