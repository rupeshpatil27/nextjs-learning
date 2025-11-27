import Form from "next/form";

export function SearchForm() {
  return (
    <Form action="" className="flex items-center space-x-0">
      <input
        type="text"
        name="q"
        placeholder="Search posts by title, author, or content..."
        className="p-2 border border-gray-300 rounded-l w-full focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r shadow transition duration-200 disabled:bg-blue-400"
      >
        Search
      </button>
    </Form>
  );
}
