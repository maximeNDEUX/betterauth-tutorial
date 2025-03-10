import NavBar from "@/components/layout/NavBar";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <NavBar />
            <div className="h-screen flex flex-col px-8 py-6">{children}</div>
        </main>
    );
}
