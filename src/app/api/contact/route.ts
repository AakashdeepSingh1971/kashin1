import { NextResponse } from "next/server";
import { db } from "@/lib/mysql";
import { initDb } from "@/lib/init-db";
import { logAction } from "@/lib/audit";
import { jwtVerify, JWTPayload } from "jose";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key";

// Verify JWT token from request
async function verifyToken(req: Request): Promise<JWTPayload> {
    const cookie = req.headers.get("cookie") || "";
    const token = cookie.split("admin_token=")?.[1];
    if (!token) throw new Error("Unauthorized");

    const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    if (!payload.role) throw new Error("Unauthorized");
    return payload;
}

// POST: create new contact request (public, no auth needed)
export async function POST(req: Request) {
    try {
        await initDb();

        const body: {
            fullName: string;
            email: string;
            phone: string;
            brandName: string;
            websiteOrInstagram: string;
            businessType: string;
        } = await req.json();

        const insertQuery = `
      INSERT INTO contact_requests
      (full_name, email, phone, brand_name, website_or_instagram, business_type)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

        await db.execute<ResultSetHeader>(insertQuery, [
            body.fullName,
            body.email,
            body.phone,
            body.brandName,
            body.websiteOrInstagram,
            body.businessType,
        ]);

        await logAction(null, "New contact request submitted");

        return NextResponse.json({ message: "Details saved successfully" }, { status: 201 });
    } catch (err: unknown) {
        console.error("DB Error:", err);
        return NextResponse.json({ error: "Failed to save details" }, { status: 500 });
    }
}

// GET: fetch all contact requests (admin-only)
export async function GET(req: Request) {
    try {
        await verifyToken(req); // ✅ protect GET requests
        await initDb();

        type ContactRequest = RowDataPacket & {
            id: number;
            full_name: string;
            email: string;
            phone: string;
            brand_name: string;
            website_or_instagram: string;
            business_type: string;
            created_at: string;
        };

        const [rows] = await db.execute<ContactRequest[]>(
            `SELECT * FROM contact_requests ORDER BY created_at DESC`
        );

        return NextResponse.json(rows, { status: 200 });
    } catch (err: unknown) {
        if (err instanceof Error && err.message === "Unauthorized") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        console.error(err);
        return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 });
    }
}
