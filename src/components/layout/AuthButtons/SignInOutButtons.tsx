import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

export default async function SignInOutButtons() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return <SignInButton />;
    }

    return <SignOutButton />;
}
