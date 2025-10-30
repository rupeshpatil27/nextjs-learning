import Link from "next/link";

export const getTeam = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("delay");
    }, 3000);
  });

  // throw new Error("Error Occurred in Team Page");
};

export default async function TeamSection() {
  await getTeam();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Team Members</h2>
      <ul className="space-y-2">
        {["Team A", "Team B", "Team C"].map((team) => (
         <li key={team} className="flex items-center bg-gray-50 hover:bg-gray-100 p-3 rounded-md transition duration-200 ease-in-out cursor-pointer">
        <span className="text-sm font-medium text-gray-700">{team}</span>
      </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          href="dashboard/admin"
          className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200 ease-in-out"
        >
          Go to Admin Page
        </Link>
      </div>
    </div>
  );
}
