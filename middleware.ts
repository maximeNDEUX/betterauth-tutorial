// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { auth } from "@/lib/auth/auth"; // Assure-toi que ce chemin est correct

// export async function middleware(request: NextRequest) {

// console.log("middleware")

//     // Vérifie la session utilisateur
//     const session = await auth.api.getSession({
//         headers: request.headers,
//     });

//     const { pathname } = request.nextUrl;

//     // Autoriser l'accès à la page d'accueil "/"
//     if (pathname === "/") {
//         return NextResponse.next();
//     }

//     // Rediriger vers "/sign-in" si l'utilisateur n'est pas authentifié
//     if (!session) {
//         return NextResponse.redirect(new URL("/sign-in", request.url));
//     }

//     return NextResponse.next(); // Laisser passer si l'utilisateur est authentifié
// }
