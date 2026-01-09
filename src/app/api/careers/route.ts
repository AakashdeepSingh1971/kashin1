import { NextResponse } from "next/server";
import { db } from "@/lib/mysql";
import { initDb } from "@/lib/init-db";
import { logAction } from "@/lib/audit";
import { jwtVerify, JWTPayload } from "jose";
import { RowDataPacket } from "mysql2";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key";
type CareerApplication = RowDataPacket & {
    id: number;
    full_name: string;
    phone: string;
    role: string;
    portfolio_link: string | null;
    created_at: string;
};
async function verifyToken(req: Request): Promise<JWTPayload> {
    const cookie = req.headers.get("cookie") || "";
    const token = cookie.split("admin_token=")?.[1];
    if (!token) throw new Error("Unauthorized");

    const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    if (!payload.role) throw new Error("Unauthorized");
    return payload;
}

export async function POST(req: Request) {
    try {
        await initDb();
        const body: {
            fullName: string;
            phone: string;
            role: string;
            portfolioLink: string;
        } = await req.json();

        const insertQuery = `
      INSERT INTO careers
      (full_name, phone, role, portfolio_link)
      VALUES (?, ?, ?, ?)
    `;
        await db.execute(insertQuery, [body.fullName, body.phone, body.role, body.portfolioLink]);

        await logAction(null, "New career application submitted");
        return NextResponse.json({ message: "Application submitted successfully" }, { status: 201 });
    } catch (err: unknown) {
        if (err instanceof Error && err.message === "Unauthorized") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        console.error("DB Error:", err);
        return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
    }
}
export async function GET(req: Request) {
    try {
        await verifyToken(req); // JWT protected
        await initDb();

        type CareerApplication = RowDataPacket & {
            id: number;
            full_name: string;
            phone: string;
            role: string;
            portfolio_link: string | null;
            created_at: string;
        };

        const [rows] = await db.execute<CareerApplication[]>(
            `SELECT * FROM careers ORDER BY created_at DESC`
        );

        return NextResponse.json(rows, { status: 200 });
    } catch (err: unknown) {
        if (err instanceof Error && err.message === "Unauthorized") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        console.error(err);
        return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
    }
}
