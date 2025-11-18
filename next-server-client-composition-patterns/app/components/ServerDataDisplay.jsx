import { getServerData } from "../utils/server-only";

export default async function ServerDataDisplay() {
  const data = await getServerData();

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
      <h4 className="text-md font-semibold mb-2">Server-Fetched Content</h4>
      <p className="text-sm">
        {data.message}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        Fetched at: {data.timestamp}
      </p>
    </div>
  );
}
