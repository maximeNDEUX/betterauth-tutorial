import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default async function UserDetails() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <Link
            href="/edit-profile"
            className={`${buttonVariants({
                variant: "ghost",
            })} flex items-center justify-center gap-2`}
        >
            <Avatar>
                <AvatarImage src={session?.user.image || undefined} />
                <AvatarFallback className="text-primary-foreground bg-primary">
                    {session?.user.name?.trim()?.charAt(0).toUpperCase() || "?"}
                </AvatarFallback>
            </Avatar>
            <p>{session?.user.name}</p>
        </Link>
    );
}
