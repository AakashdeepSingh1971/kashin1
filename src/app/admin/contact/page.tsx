
async function getContacts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, {
        cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch contacts');
    return res.json();
}

export default async function ContactPage() {
    const contacts = await getContacts();

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
                        {contacts.map((item: any) => (
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
