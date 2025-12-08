import { getLoggedInUser } from "@/lib/auth";
import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const user = await getLoggedInUser();

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    const status = error.cause || 500;
    const message = error.message || "Something went wrong!";

    return NextResponse.json({ message: message }, { status: status });
  }
}

