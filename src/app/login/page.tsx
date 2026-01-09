'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const username = (form.username as any).value;
        const password = (form.password as any).value;

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            setError('Invalid credentials');
            return;
        }

        router.push('/admin/contact');
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-80 space-y-4">
                <h1 className="text-xl font-bold text-center">Admin Login</h1>

                <input name="username" placeholder="Username" required className="border p-2 w-full" />
                <input name="password" type="password" placeholder="Password" required className="border p-2 w-full" />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button className="w-full bg-black text-white p-2">Login</button>
            </form>
        </div>
    );
}
