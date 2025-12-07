import User from "@/models/userModel";
import { cookies } from "next/headers";

export async function getLoggedInUser() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    throw new Error("Not authenticated", { cause: 401 });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found", { cause: 401 });
    }

    return user;
  } catch (error) {
    if (error.name === "CastError") {
      throw new Error("Invalid User ID format", { cause: 400 });
    }
    if (error.cause) throw error;
    throw new Error("Database error during user fetch", { cause: 500 });
  }
}
