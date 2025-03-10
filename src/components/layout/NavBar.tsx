import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function NavBar() {
    return (
        <div className="border-b-1 px-8 py-4 flex items-center justify-between">
            {/* Home button */}
            <Link href="/" className="hover:underline">
                <div className="flex items-center gap-2">
                    <HomeIcon className="h-6 w-6" />
                    <span className="font-semibold">Home</span>
                </div>
            </Link>

            {/* Sign-In button */}
            <Link
                href="/sign-in"
                className={buttonVariants({ variant: "secondary" })}
            >
                Sign-In
            </Link>
        </div>
    );
}
