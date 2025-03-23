import NavBar from "@/components/layout/NavBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <NavBar />
            {children}
        </main>
    );
}
