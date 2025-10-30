import { wait } from "@/app/_lib/utils";

export default async function AdminPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Admin</h2>
      <ul className="space-y-2">
        {["Admin 1", "Admin 2", "Admin 3"].map((admin) => (
          <li
            key={admin}
            className="flex items-center bg-gray-50 hover:bg-gray-100 p-3 rounded-md transition duration-200 ease-in-out cursor-pointer"
          >
            <span className="text-sm font-medium text-gray-700">{admin}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
