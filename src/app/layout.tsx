import type { Metadata } from "next";
import "./globals.css";

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
            <body className="antialiased mx-">{children}</body>
        </html>
    );
}
