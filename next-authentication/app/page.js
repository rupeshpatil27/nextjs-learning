import LogoutButton from "@/components/LogoutButton";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getSessionOnServer() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  if (!userId) return null;
  return userId;
}

export default async function Home() {
  const cookieStore = await cookies();
  const session = await getSessionOnServer();
  if (!session) {
    redirect("/auth/login");
  }

  let initialTodos = [];

  try {
    const response = await fetch("http://localhost:3000/api/todos/", {
      cache: "no-store",
      headers: { Cookie: cookieStore.toString() },
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData);
    }

    initialTodos = await response.json();
  } catch (error) {
    console.log(error.message);
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
            <LogoutButton />
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
