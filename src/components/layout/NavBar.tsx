import SignInOutButtons from "./AuthButtons/SignInOutButtons";
import UserDetails from "./UserDetails";
import ThemeToggle from "./ThemeToggle";

import HomeButton from "./HomeButton";

export default function NavBar() {
    return (
        <div className="border-b-1 px-8 py-4 flex items-center justify-between">
            {/* Home button */}
            <HomeButton />

            <ThemeToggle />

            <div className="flex items-center justify-center gap-8">
                <UserDetails />
                <SignInOutButtons />
            </div>
        </div>
    );
}
