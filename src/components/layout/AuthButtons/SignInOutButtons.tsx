import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import SignUpButton from "./SignUpButton";

export default async function SignInOutButtons() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return (
            <div className="flex items-center justify-center gap-2">
                <SignUpButton />
                <SignInButton />
            </div>
        );
    }

    return <SignOutButton />;
}
