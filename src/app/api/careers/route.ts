import { NextResponse } from 'next/server';
import { db } from '@/lib/mysql';
import { initDb } from '@/lib/init-db';
import { logAction } from '@/lib/audit';



export async function POST(req: Request) {
    try {
        // Ensure tables exist
        await initDb();

        const body = await req.json();
        const {
            fullName,
            phone,
            role,
            portfolioLink,
        } = body;

        const insertQuery = `
            INSERT INTO careers
            (full_name, phone, role, portfolio_link)
            VALUES (?, ?, ?, ?)
        `;

        await db.execute(insertQuery, [
            fullName,
            phone,
            role,
            portfolioLink,
        ]);
        // after db.execute insert
        await logAction(null, 'New career application submitted');
        return NextResponse.json(
            { message: 'Application submitted successfully' },
            { status: 201 }
        );
    } catch (error) {
        console.error('DB Error:', error);
        return NextResponse.json(
            { error: 'Failed to submit application' },
            { status: 500 }
        );
    }
}



export async function GET() {
    try {
        await initDb();

        const [rows] = await db.execute(
            `SELECT * FROM careers ORDER BY created_at DESC`
        );

        return NextResponse.json(rows, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
    }
}