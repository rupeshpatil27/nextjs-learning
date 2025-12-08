import { NextResponse } from "next/server";
import Todo from "@/models/todoModel";
import connectDB from "@/lib/connectDB";
import { getLoggedInUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

// DELETE handler
export async function DELETE(request, { params }) {
  await connectDB();

  const { id } = await params;

  try {
    const user = await getLoggedInUser();

    const result = await Todo.deleteOne({ _id: id, userId: user.id });
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Todo not found or unauthorized" },
        { status: 404 }
      );
    }

    revalidatePath("/api/todos");

    return NextResponse.json({ success: true, message: "Todo deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting todo" }, { status: 500 });
  }
}

// PUT handler (Toggle completion status)
export async function PUT(request, { params }) {
  await connectDB();

  const body = await request.json();
  const { id } = await params;

  try {
    const user = await getLoggedInUser();

    const updateData = {};
    if (body.hasOwnProperty("completed")) {
      updateData.completed = body.completed;
    }
    if (
      body.hasOwnProperty("task") &&
      typeof body.task === "string" &&
      body.task.trim() !== ""
    ) {
      updateData.task = body.task;
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { error: "No valid fields provided for update" },
        { status: 400 }
      );
    }

    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id, userId: user.id },
      { $set: updateData }, // Use $set for dynamic updates
      { new: true }
    );

    if (!updatedTodo) {
      return NextResponse.json(
        { error: "Todo not found or unauthorized" },
        { status: 404 }
      );
    }

    revalidatePath("/api/todos");

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json({ error: "Error updating todo" }, { status: 500 });
  }
}
