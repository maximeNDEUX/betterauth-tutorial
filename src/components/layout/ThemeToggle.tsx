"use client";

import * as React from "react";
import { Moon, MoonIcon, RefreshCwIcon, Sun, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import fr from "@/locales/fr";

export default function ThemeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="hover:cursor-pointer"
                    variant="outline"
                    size="icon"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className="flex items-center hover:cursor-pointer"
                >
                    <SunIcon className="text-card-foreground" />
                    {fr.layout.toggleButton.light}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className="flex items-center hover:cursor-pointer"
                >
                    <MoonIcon className="text-card-foreground" />
                    {fr.layout.toggleButton.dark}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className="flex items-center hover:cursor-pointer"
                >
                    <RefreshCwIcon className="text-card-foreground" />
                    {fr.layout.toggleButton.system}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
