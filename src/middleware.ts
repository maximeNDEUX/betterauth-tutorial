import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request);
    const { pathname } = request.nextUrl;

    const isAuthPage = ["/sign-in", "/sign-up"].includes(pathname);
    const isProtectedPage = ["/dashboard", "/edit-profile"].includes(pathname);

    if (sessionCookie && isAuthPage) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (!sessionCookie && isProtectedPage) {
        return NextResponse.redirect(new URL("/signed-out", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard", "/edit-profile", "/sign-in", "/sign-up"],
};
