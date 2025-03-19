"use client";

import Form from "next/form";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/auth-client";
import { redirect } from "next/navigation";

import fr from "@/locales/fr";
import { toast } from "sonner";
import { LogOutIcon } from "lucide-react";

export default function SignOutButton() {
    return (
        <Form
            action={() => {
                toast.success(fr.auth.signOut.status.successTitle, {
                    description: fr.auth.signOut.status.successDescription,
                });
                authClient.signOut();
                redirect("/signed-out");
            }}
        >
            <Button
                className="hover:cursor-pointer"
                type="submit"
                variant={"destructive"}
            >
                <LogOutIcon />
                {fr.auth.signOut.button}
            </Button>
        </Form>
    );
}
