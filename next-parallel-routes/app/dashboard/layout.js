import Link from "next/link";
export default function DashboardLayout({ children, team, user }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full mx-auto p-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            this is dashboard layout
          </h1>
        </header>

        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <div>{children}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Team</h2>
            <div className="mt-4">{team}</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">User</h2>
            <div className="mt-4">{user}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
