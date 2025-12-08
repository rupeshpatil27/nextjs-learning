import connectDB from "@/lib/connectDB";
import User from "@/models/userModel";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { signCookie } from "@/lib/auth";
import Session from "@/models/sessionModel";

export async function POST(req) {
  await connectDB();

  const cookieStore = await cookies();
  const { email, password } = await req.json();

  try {
    // Basic Input Validation
    if (!email || !password) {
      return NextResponse.json(
        { message: "Invalid Credentials!" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User not exists." },
        { status: 401 }
      );
    }

    const session = await Session.create({ userId: user._id });

    cookieStore.set("sid", signCookie(session.id), {
      httpOnly: true,
      maxAge: 60 * 60,
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Something wewnt wrong!" },
      { status: 500 }
    );
  }
}
