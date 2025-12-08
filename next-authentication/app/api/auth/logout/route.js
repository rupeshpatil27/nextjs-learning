import { NextResponse } from "next/server";

import { getUserSessionId } from "@/lib/auth";
import Session from "@/models/sessionModel";
import { cookies } from "next/headers";
import connectDB from "@/lib/connectDB";

export async function POST() {
  await connectDB();
  const cookieStore = await cookies();
  const sessionId = await getUserSessionId();

  
  try {
    await Session.findByIdAndDelete(sessionId);
    cookieStore.delete("sid")
    return NextResponse.json(null, { status: 204 });
  } catch (error) {
    const status = error.cause || 500;
    const message = error.message || "Something went wrong!";

    return NextResponse.json({ message: message }, { status: status });
  }
}
