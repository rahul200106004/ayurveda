export default function CreateDoctor() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Create Doctor Profile</h2>
      <form className="flex flex-col gap-2 mt-4">
        <input type="text" placeholder="Name" className="border p-2" />
        <input type="email" placeholder="Email" className="border p-2" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
}