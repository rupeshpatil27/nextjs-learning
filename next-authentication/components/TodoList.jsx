"use client";

import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ initialTodos }) {
  const [filter, setFilter] = useState("All");

  const filteredTodos = initialTodos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const FilterButton = ({ name }) => (
    <button
      onClick={() => setFilter(name)}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-150 ${
        filter === name
          ? "bg-indigo-600 text-white shadow-md"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {name}
    </button>
  );

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-6 p-2 bg-gray-50 rounded-xl">
        <FilterButton name="All" />
        <FilterButton name="Active" />
        <FilterButton name="Completed" />
      </div>

      <ul className="space-y-3">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
        {filteredTodos.length === 0 && (
          <p className="text-gray-500 text-center py-4">
            No {filter.toLowerCase()} todos found.
          </p>
        )}
      </ul>
    </div>
  );
}
