import { NextResponse } from 'next/server';
import { db } from '@/lib/mysql';
import { initDb } from '@/lib/init-db';

export async function POST(req: Request) {
    try {
        // Ensure table exists
        await initDb();

        const body = await req.json();
        const {
            fullName,
            email,
            phone,
            brandName,
            websiteOrInstagram,
            businessType,
        } = body;

        const insertQuery = `
      INSERT INTO contact_requests
      (full_name, email, phone, brand_name, website_or_instagram, business_type)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

        await db.execute(insertQuery, [
            fullName,
            email,
            phone,
            brandName,
            websiteOrInstagram,
            businessType,
        ]);

        return NextResponse.json(
            { message: 'Details saved successfully' },
            { status: 201 }
        );
    } catch (error) {
        console.error('DB Error:', error);
        return NextResponse.json(
            { error: 'Failed to save details' },
            { status: 500 }
        );
    }
}
