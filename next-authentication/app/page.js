"use client";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import UserProfileDropdown from "@/components/UserProfileDropdown";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeData = async () => {
        await fetchTodos();
        await fetchUser();
        setIsLoading(false);
    };
    initializeData();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/user/");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(JSON.stringify(data));
      }
      setUser(data);
    } catch (error) {
      console.log(error);
      redirect("/auth/login");
    }
  };

  const fetchTodos = async () => {
    try {
      const response = await fetch("/api/todos/");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(JSON.stringify(data));
      }
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading && !user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-xl mx-auto">
        <header className="flex justify-between items-center mb-6 p-4">
          <h1 className="text-3xl font-bold text-gray-800">My Todos</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm hidden sm:inline">
              Hello,!
            </span>
            <UserProfileDropdown user={user} />
          </div>
        </header>

        <main className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
          <TodoForm />
          <TodoList initialTodos={Array.isArray(todos) ? todos : []} />
        </main>
      </div>
    </div>
  );
}
