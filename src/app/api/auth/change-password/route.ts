import { NextResponse } from 'next/server';
import { db } from '@/lib/mysql';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { logAction } from '@/lib/audit';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key';

export async function POST(req: Request) {
    try {
        const token = req.headers.get('cookie')?.split('admin_token=')[1];
        if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const decoded: any = jwt.verify(token, JWT_SECRET);
        const { currentPassword, newPassword } = await req.json();

        const [rows]: any = await db.execute(
            `SELECT password FROM users WHERE id = ?`,
            [decoded.id]
        );

        const isValid = await bcrypt.compare(currentPassword, rows[0].password);
        if (!isValid) {
            return NextResponse.json({ error: 'Wrong password' }, { status: 401 });
        }

        const hashed = await bcrypt.hash(newPassword, 10);

        await db.execute(
            `UPDATE users SET password = ? WHERE id = ?`,
            [hashed, decoded.id]
        ); await logAction(decoded.id, 'Password changed');


        return NextResponse.json({ message: 'Password updated' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to change password' }, { status: 500 });
    }
}
