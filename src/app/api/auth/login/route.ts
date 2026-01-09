import { NextResponse } from 'next/server';
import { db } from '@/lib/mysql';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { logAction } from '@/lib/audit';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key';

export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();

        const [rows]: any = await db.execute(
            `SELECT * FROM users WHERE username = ?`,
            [username]
        );

        if (!rows.length) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const user = rows[0];
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        const response = NextResponse.json({ message: 'Login successful' });
        response.cookies.set('admin_token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
            
        });
        await logAction(user.id, 'Admin logged in');

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Login failed' }, { status: 500 });
    }
}
