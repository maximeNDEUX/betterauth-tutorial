import { CameraIcon } from "lucide-react";
import Link from "next/link";

import fr from "@/locales/fr";
// import { Button } from "@/components/ui/button";

export default function LogoButton() {
    return (
        <Link
            href="/"
            className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
        >
            <div className="flex items-center gap-2">
                <CameraIcon />
                <div className="flex gap-1">
                    <span className="text-lg underline underline-offset-4 decoration-solid decoration-primary">
                        {fr.branding.appNamePart1}
                    </span>
                    <span className="text-lg font-semibold">
                        {fr.branding.appNamePart2}
                    </span>
                </div>
            </div>
        </Link>
    );
}
