"use client";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import UserProfileDropdown from "@/components/UserProfileDropdown";
import { getSessionOnServer } from "@/lib/auth";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState();
  const [todo, setTodos] = useState([]);

  useEffect(async () => {
    const session = await getSessionOnServer();
    if (!session) {
      redirect("/auth/login");
    }

    fetchTodos();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/user/");

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData);
      }

      data = await response.json();

      setUser(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const fetchTodos = async () => {
    try {
      const response = await fetch("/api/todos/");

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData);
      }

      data = await response.json();

      setTodos(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-xl mx-auto">
        <header className="flex justify-between items-center mb-6 p-4">
          <h1 className="text-3xl font-bold text-gray-800">My Todos</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm hidden sm:inline">
              Hello,!
            </span>
            <UserProfileDropdown
              user={user}
            />
          </div>
        </header>

        <main className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
          <TodoForm />
          <TodoList
            initialTodos={Array.isArray(initialTodos) ? initialTodos : []}
          />
        </main>
      </div>
    </div>
  );
}
