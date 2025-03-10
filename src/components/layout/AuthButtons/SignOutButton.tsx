import Form from "next/form";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default function SignOutButton() {
    return (
        <Form
            action={async () => {
                "use server";
                await auth.api.signOut({
                    headers: await headers(),
                });
                redirect("/");
            }}
        >
            <Button type="submit" variant={"destructive"}>
                Sign-Out
            </Button>
        </Form>
    );
}
