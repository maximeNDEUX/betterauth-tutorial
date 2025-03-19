import fr from "@/locales/fr";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function HomeButton() {
    return (
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
            {fr.ui.homeButton}
        </Link>
    );
}
