export default function ViewPatients() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Patients List</h2>
      <table className="table-auto border mt-4 w-full">
        <thead><tr><th>Name</th><th>Email</th><th>Registered</th></tr></thead>
        <tbody><tr><td>Rahul</td><td>rahul@example.com</td><td>2025-09-01</td></tr></tbody>
      </table>
    </div>
  );
}