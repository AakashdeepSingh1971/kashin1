import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key";
const PUBLIC_ROUTES = ["/login", "/reset-password"];

export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    console.log("🟢 Middleware hit for:", pathname);
    console.log("Cookie token:", req.cookies.get("admin_token")?.value);

    // Skip public routes
    if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
        return NextResponse.next();
    }

    const token = req.cookies.get("admin_token")?.value;

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

        // Require role for admin
        if (pathname.startsWith("/admin") && !payload.role) {
            const redirect = NextResponse.redirect(new URL("/login", req.url));
            redirect.headers.set("Cache-Control", "no-store");
            return redirect;
        }

        const res = NextResponse.next();
        res.headers.set("Cache-Control", "no-store");
        return res;
    } catch {
        // err is not used → no warning
        const redirect = NextResponse.redirect(new URL("/login", req.url));
        redirect.headers.set("Cache-Control", "no-store");
        return redirect;
    }
}
export const config = {
    matcher: ["/admin", "/admin/:path*"], // include /admin itself
};
