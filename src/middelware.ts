import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key";
const PUBLIC_ROUTES = ["/login", "/reset-password"];

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const pathname = req.nextUrl.pathname;

    // console logs (optional)
    console.log("🟢 Middleware hit for:", pathname);
    console.log("Cookie token:", req.cookies.get("admin_token")?.value);

    // Skip auth for public routes
    if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
        return NextResponse.next();
    }

    const token = req.cookies.get("admin_token")?.value;

    // No token → redirect
    if (!token) {
        const redirect = NextResponse.redirect(new URL("/login", req.url));
        redirect.headers.set("Cache-Control", "no-store");
        return redirect;
    }

    try {
        const { payload } = await jwtVerify(
            token,
            new TextEncoder().encode(JWT_SECRET)
        );

        // All /admin pages require a role
        if (pathname.startsWith("/admin") && !payload.role) {
            const redirect = NextResponse.redirect(new URL("/login", req.url));
            redirect.headers.set("Cache-Control", "no-store");
            return redirect;
        }

        const res = NextResponse.next();
        res.headers.set("Cache-Control", "no-store");
        return res;
    } catch (err) {
        const redirect = NextResponse.redirect(new URL("/login", req.url));
        redirect.headers.set("Cache-Control", "no-store");
        return redirect;
    }
}

export const config = {
    matcher: ["/admin/:path*"],
};
