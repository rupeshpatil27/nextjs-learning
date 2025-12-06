import { getLoggedInUser } from "@/lib/auth";
import connectDB from "@/lib/connectDB";
import Todo from "@/models/todoModel";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const user = getLoggedInUser();
    
    const todos = await Todo.find({ userId: user._id }).sort({ createdAt: -1 });
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Something wewnt wrong!" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  await connectDB();
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { task } = await request.json();
  if (!task)
    return NextResponse.json({ error: "Task required" }, { status: 400 });

  const newTodo = await Todo.create({
    task,
    userId,
  });

  return NextResponse.json(newTodo, { status: 201 });
}
