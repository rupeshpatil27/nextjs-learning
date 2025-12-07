import User from "@/models/userModel";
import { createHmac } from "crypto";
import { cookies } from "next/headers";

export async function getLoggedInUser() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("userId")?.value;

  if (!cookie) {
    throw new Error("Not authenticated", { cause: 401 });
  }

  const userId = verifyCookie(cookie);

  if (!userId) {
    throw new Error("Not Verified", { cause: 401 });
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

export function signCookie(cookie) {
  const signature = createHmac("sha256", process.env.COOKIE_SECRET)
    .update(cookie)
    .digest("hex");

  return `${cookie}.${signature}`;
}

export function verifyCookie(signedcookie) {
  const [cookie, cookieSignature] = signedcookie.split(".");

  const signature = signCookie(cookie).split(".")[1];

  if (signature === cookieSignature) {
    return cookie;
  }

  return false;
}
