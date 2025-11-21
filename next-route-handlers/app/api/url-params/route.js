import { NextResponse } from "next/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  const name = searchParams.get("name") || "Guest";
  const sortOrder = searchParams.get("sort") || "asc";

  return NextResponse.json({
    message: `Hello, ${name}! Data is sorted in ${sortOrder} order.`,
    availableParams: Object.fromEntries(searchParams.entries()),
  });
}
