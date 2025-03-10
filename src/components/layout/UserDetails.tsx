import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { Card, CardContent } from "../ui/card";

export default async function UserDetails() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        console.log("session null !!!");
    }

    return (
        <Card>
            <CardContent>
                <h2 className="font-semibold">User details</h2>
                <p>{session?.user.email}</p>
            </CardContent>
        </Card>
    );
}
