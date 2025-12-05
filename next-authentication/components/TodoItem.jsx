// components/TodoItem.jsx (use client)
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaTrashAlt, FaCheckCircle,FaRegCheckCircle, FaPen, FaTimes } from 'react-icons/fa';

export default function TodoItem({ todo }) {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [editTaskText, setEditTaskText] = useState(todo.task);

  const toggleCompleted = async () => {
    await fetch(`/api/todos/${todo._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    router.refresh();
  };

  const deleteTodo = async () => {
    await fetch(`/api/todos/${todo._id}`, {
      method: 'DELETE',
    });
    router.refresh(); // Refresh the page data after deletion
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (editTaskText.trim() === '') return;

    await fetch(`/api/todos/${todo._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: editTaskText.trim() }),
    });
    
    setIsEditing(false);
    router.refresh(); // Refresh the list
  };

  return (
    <li className={`p-4 border border-gray-200 rounded-lg shadow-sm flex items-center justify-between transition duration-150 ease-in-out ${
      todo.completed ? 'bg-gray-100 text-gray-400 line-through' : 'bg-white text-gray-800 hover:shadow-md'
    }`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="grow flex items-center space-x-3">
          <input
            type="text"
            value={editTaskText}
            onChange={(e) => setEditTaskText(e.target.value)}
            className="flex grow p-2 border border-indigo-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            autoFocus
          />
          <button type="submit" className="text-indigo-600 hover:text-indigo-800 transition">
            Save
          </button>
          <button type="button" onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-gray-700 transition">
            <FaTimes className='w-5 h-5'/>
          </button>
        </form>
      ) : (
        <>
          <div className="flex items-center space-x-3">
            <button onClick={toggleCompleted} className="focus:outline-none">
              {todo.completed ? (
                <FaCheckCircle className="w-6 h-6 text-indigo-500 hover:text-indigo-600 transition" />
              ) : (
                <FaRegCheckCircle className="w-6 h-6 text-gray-400 hover:text-gray-500 transition" />
              )}
            </button>
            <span>{todo.task}</span>
          </div>
          <div className="flex items-center space-x-3">
            {!todo.completed && (
                <button onClick={() => setIsEditing(true)} className="text-gray-400 hover:text-indigo-500 transition focus:outline-none">
                    <FaPen className="w-5 h-5" />
                </button>
            )}
            <button onClick={deleteTodo} className="text-gray-400 hover:text-red-500 transition focus:outline-none">
              <FaTrashAlt className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </li>
  );
}
