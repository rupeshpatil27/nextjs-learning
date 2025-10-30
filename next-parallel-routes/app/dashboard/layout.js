export default function DashboardLayout({ children, team, user }) {
  const role = "admin";
  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto p-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-500">
            Dashboard Layout
          </h1>
        </header>

        <div className="bg-white p-6 mb-10">
          <div>{children}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {role === "admin" ? <div>{team}</div> : <div>{user}</div>}
        </div>
      </div>
    </div>
  );
}
