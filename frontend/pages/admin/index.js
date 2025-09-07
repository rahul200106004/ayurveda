export default function AdminPanel() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <ul className="mt-4">
        <li><a href="/admin/create-doctor" className="text-green-600">Create Doctor</a></li>
        <li><a href="/admin/view-patients" className="text-green-600">View Patients</a></li>
      </ul>
    </div>
  );
}