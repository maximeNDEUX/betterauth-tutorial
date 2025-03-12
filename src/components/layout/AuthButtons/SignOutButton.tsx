"use client";

import Form from "next/form";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/auth-client";
// import { header } from "next/headers";
import { redirect } from "next/navigation";

export default function SignOutButton() {
    return (
        <Form
            action={() => {
                authClient.signOut();
                redirect("/");
            }}
        >
            <Button type="submit" variant={"destructive"}>
                Sign-Out
            </Button>
        </Form>
    );
}
