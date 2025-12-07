import { getLoggedInUser } from "@/lib/auth";
import connectDB from "@/lib/connectDB";
import Todo from "@/models/todoModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const user = await getLoggedInUser();

    const todos = await Todo.find({ userId: user.id }).sort({ createdAt: -1 });

    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    const status = error.cause || 500;
    const message = error.message || "Something went wrong!";

    return NextResponse.json({ message: message }, { status: status });
  }
}

export async function POST(request) {
  await connectDB();
  const { task } = await request.json();

  const user = await getLoggedInUser();

  try {
    if (!task)
      return NextResponse.json({ error: "Task required" }, { status: 400 });

    const newTodo = await Todo.create({
      task,
      userId:user.id,
    });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    const status = error.cause || 500;
    const message = error.message || "Something went wrong!";

    return NextResponse.json({ message: message }, { status: status });
  }
}
