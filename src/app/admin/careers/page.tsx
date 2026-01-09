async function getApplications() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/careers`, {
        cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch applications');
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
                            <th className="p-2 border">Phone</th>
                            <th className="p-2 border">Role</th>
                            <th className="p-2 border">Portfolio</th>
                            <th className="p-2 border">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((item: any) => (
                            <tr key={item.id} className="text-sm">
                                <td className="p-2 border">{item.full_name}</td>
                                <td className="p-2 border">{item.phone}</td>
                                <td className="p-2 border">{item.role}</td>
                                <td className="p-2 border">
                                    {item.portfolio_link ? (
                                        <a
                                            href={item.portfolio_link}
                                            target="_blank"
                                            className="text-blue-600 underline"
                                        >
                                            View
                                        </a>
                                    ) : (
                                        '—'
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