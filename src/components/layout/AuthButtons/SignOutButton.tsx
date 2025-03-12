"use client";

import Form from "next/form";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/auth-client";
import { redirect } from "next/navigation";

import fr from "@/locales/fr";

export default function SignOutButton() {
    return (
        <Form
            action={() => {
                authClient.signOut();
                redirect("/");
            }}
        >
            <Button type="submit" variant={"destructive"}>
                {fr.auth.logout}
            </Button>
        </Form>
    );
}
