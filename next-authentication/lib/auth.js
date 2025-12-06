const { default: User } = require("@/models/userModel");
const { cookies } = require("next/headers");
const { NextResponse } = require("next/server");

export async function getLoggedInUser() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId)
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  try {
    const user = await User.findById({ userId });

    if (!user) {
      return NextResponse.json(
        { message: "User not exists." },
        { status: 401 }
      );
    }
    return user;
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Something wewnt wrong!" },
      { status: 500 }
    );
  }
}
