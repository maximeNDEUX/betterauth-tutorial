import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function UserDetails() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <div
            className={`flex items-center justify-center gap-2 hover:${session?.user.email}`}
        >
            <Avatar>
                <AvatarImage src={session?.user.image || undefined} />
                <AvatarFallback>
                    {session?.user.name?.trim()?.charAt(0).toUpperCase() || "?"}
                </AvatarFallback>
            </Avatar>
            <p>{session?.user.name}</p>
        </div>
    );
}
