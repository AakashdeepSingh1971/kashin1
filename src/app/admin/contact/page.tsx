// src/app/admin/contact/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ContactItem = {
    id: number;
    full_name: string;
    email: string;
    phone: string;
    brand_name: string;
    business_type: string;
    created_at: string; // ISO string from DB
};

async function getApplications(): Promise<ContactItem[]> {
    // Get token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    // If no token → redirect to login
    if (!token) {
        redirect("/login");
    }

    // Fetch API with token forwarded
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, {
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

export default async function ContactPage() {
    const contacts = await getApplications();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Contact Requests</h1>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Email</th>
                            <th className="p-2 border">Phone</th>
                            <th className="p-2 border">Brand</th>
                            <th className="p-2 border">Business Type</th>
                            <th className="p-2 border">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((item: ContactItem) => (
                            <tr key={item.id} className="text-sm">
                                <td className="p-2 border">{item.full_name}</td>
                                <td className="p-2 border">{item.email}</td>
                                <td className="p-2 border">{item.phone}</td>
                                <td className="p-2 border">{item.brand_name}</td>
                                <td className="p-2 border">{item.business_type}</td>
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
