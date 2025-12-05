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
    redirect('/auth/login');
  }


  const response = await fetch("http://localhost:3000/api/todos/", {
      cache: 'no-store',
      headers: { 'Cookie': cookieStore.toString() }
  });
  const initialTodos = await response.json();

  return (
    // <div className="container mx-auto px-4">
    //   <Header />
    //   <h1 className="text-3xl font-bold mt-8 mb-4">Latest Blog Posts</h1>

    //   <div className="space-y-6">
    //     {posts.length > 0 ? (
    //       posts.map((post) => (
    //         <div
    //           key={post._id}
    //           className="p-6 border rounded-lg shadow-sm bg-white"
    //         >
    //           <h2 className="text-xl font-semibold text-blue-600">
    //             <Link href={`/posts/${post._id}`} className="hover:underline">
    //               {post.title}
    //             </Link>
    //           </h2>
    //           <p className="text-gray-600 mt-2 line-clamp-2">{post.content}</p>
    //           <p className="text-sm text-gray-400 mt-2">
    //             By {post.author} on{" "}
    //             {new Date(post.createdAt).toLocaleDateString()}
    //           </p>
    //         </div>
    //       ))
    //     ) : (
    //       <p className="text-gray-500">
    //         No blog posts found. Be the first to create one!
    //       </p>
    //     )}
    //   </div>
    // </div>

    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-xl mx-auto">
        <header className="flex justify-between items-center mb-6 p-4">
          <h1 className="text-3xl font-bold text-gray-800">My Todos</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm hidden sm:inline">Hello,!</span>
            {/* <LogoutButton /> */}
          </div>
        </header>

        <main className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
          <TodoForm />
          <TodoList initialTodos={initialTodos} />
        </main>
      </div>
    </div>
  );
}
