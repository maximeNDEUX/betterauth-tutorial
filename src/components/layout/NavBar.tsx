import { HomeIcon } from "lucide-react";
import Link from "next/link";
import SignInOutButtons from "./AuthButtons/SignInOutButtons";
import UserDetails from "./UserDetails";

export default function NavBar() {
    return (
        <div className="border-b-1 px-8 py-4 flex items-center justify-between">
            {/* Home button */}
            <Link href="/" className="hover:underline">
                <div className="flex items-center gap-2">
                    <HomeIcon className="h-6 w-6" />
                    <span className="font-semibold">Accueil</span>
                </div>
            </Link>

            <div className="flex items-center justify-center gap-8">
                <UserDetails />
                <SignInOutButtons />
            </div>
        </div>
    );
}
