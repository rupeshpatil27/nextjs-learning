import connectDB from "@/lib/connectDB";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

import bcrypt from "bcrypt";

export async function POST(req) {
  await connectDB();
  const { name, email, password } = await req.json();

  // Basic Input Validation
  if (
    !name ||
    !email ||
    !password ||
    name.trim() === "" ||
    password.trim().length < 2
  ) {
    return NextResponse.json(
      { message: "Invalid input. Please check your details." },
      { status: 422 }
    );
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return NextResponse.json(
      { message: "User with this email already exists." },
      { status: 422 }
    );
  }

  const hashPassword = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    password: hashPassword,
  });

  return NextResponse.json(
    { message: "User created successfully!" },
    { status: 201 }
  );
}
