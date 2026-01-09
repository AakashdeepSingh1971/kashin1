import { NextResponse } from 'next/server';
import { db } from '@/lib/mysql';
import bcrypt from 'bcryptjs';
import { logAction } from '@/lib/audit';

export async function POST(req: Request) {
    try {
        const { username, newPassword } = await req.json();

        if (!username || !newPassword) {
            return NextResponse.json(
                { error: 'Missing fields' },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await db.execute(
            `UPDATE users SET password = ? WHERE username = ?`,
            [hashedPassword, username]
        );
        await logAction(null, `Password reset for ${username}`);

        return NextResponse.json({ message: 'Password reset successful' });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to reset password' },
            { status: 500 }
        );
    }
}
