"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminHeader() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            router.replace("/"); // SPA redirect to login
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (
        <header className="h-16 bg-black text-white flex items-center justify-between px-6">
            <span className="font-semibold text-lg">Admin Dashboard</span>
            <nav className="flex gap-4 text-sm">
                <Link href="/admin/contact">Contact</Link>
                <Link href="/admin/careers">Careers</Link>
                <button
                    onClick={handleLogout}
                    className="border px-3 py-1 rounded hover:bg-white hover:text-black transition"
                >
                    Logout
                </button>
            </nav>
        </header>
    );
}
