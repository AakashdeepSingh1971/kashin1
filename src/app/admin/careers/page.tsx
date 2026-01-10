// src/app/admin/careers/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type CareerApplication = {
    id: number;
    full_name: string;
    phone: string;
    role: string;
    portfolio_link: string | null;
    email: string;
    created_at: string; // ISO string from DB
};

async function getApplications(): Promise<CareerApplication[]> {
    // Get token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    // If no token → redirect to login
    if (!token) {
        redirect("/login");
    }

    // Fetch API with token forwarded
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/careers`, {
        cache: "no-store",
        headers: {
            cookie: `admin_token=${token}`,
        },
    });

    if (!res.ok) {
        // If API returns 401 → redirect to login
        if (res.status === 401) {
            redirect("/login");
        }
        throw new Error("Failed to fetch applications");
    }

    return res.json();
}

export default async function CareersPage() {
    const applications = await getApplications();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Job Applications</h1>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Email</th>
                            <th className="p-2 border">Phone</th>
                            <th className="p-2 border">Role</th>
                            <th className="p-2 border">Portfolio</th>
                            <th className="p-2 border">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((item: CareerApplication) => (
                            <tr key={item.id} className="text-sm">
                                <td className="p-2 border">{item.full_name}</td>
                                <td className="p-2 border">{item.email}</td>
                                <td className="p-2 border">{item.phone}</td>
                                <td className="p-2 border">{item.role}</td>
                                <td className="p-2 border">
                                    {item.portfolio_link ? (
                                        <a
                                            href={item.portfolio_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline"
                                        >
                                            View
                                        </a>
                                    ) : (
                                        "—"
                                    )}
                                </td>
                                <td className="p-2 border">
                                    {new Date(item.created_at).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
