import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: "BetterAuth Demo",
    description: "A tutorial about BetterAuth and Arcjet for authentification",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className="antialiased mx-">
                <main>{children}</main>
                <Toaster closeButton={true} />
            </body>
        </html>
    );
}
