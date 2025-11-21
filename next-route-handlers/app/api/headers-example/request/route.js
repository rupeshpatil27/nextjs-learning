import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  //   const requestHeaders=new Headers(request.headers)

  const requestHeaders = await headers();
  const userAgent = requestHeaders.get("user-agent") || "N/A";
  const authorization = requestHeaders.get("authorization") || "N/A";
  const customHeader = requestHeaders.get("x-custom-header") || "N/A";

  return NextResponse.json({
    message: "Reading incoming request headers.",
    "user-agent": userAgent,
    "authorization-status":
      authorization === "N/A" ? "Not Provided" : authorization,
    "x-custom-header": customHeader,
  });
}
