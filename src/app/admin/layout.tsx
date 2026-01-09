"use client";

import { useRouter } from 'next/navigation';

import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    useEffect(() => {
        // Optional: if admin_token missing, redirect immediately on client
        const token = document.cookie
            .split('; ')
            .find(row => row.startsWith('admin_token'))
            ?.split('=')[1];
        console.log(token)
        if (!token) {
            router.replace('/login');
        }
    }, [router]);
    return (
        <>
            {/* BODY */}
            <main className="flex-1 overflow-auto p-6">{children}</main>
        </>
    );
}
