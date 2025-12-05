'use client';

export default function TodoList({ initialTodos }) {

console.log(initialTodos)
    
  return (
    <ul className="space-y-3">
      {initialTodos.map((todo) => (
        <li
          key={todo._id}
          className={`p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center transition duration-150 ease-in-out hover:shadow-md ${
            todo.completed ? 'line-through text-gray-400 bg-gray-100' : 'text-gray-800'
          }`}
        >
          <span>{todo.task}</span>
        </li>
      ))}
      {initialTodos.length === 0 && (
          <p className="text-gray-500 text-center py-4">No todos found. Add one above!</p>
      )}
    </ul>
  );
}
