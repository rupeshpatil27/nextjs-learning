import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Welcome to the protected data API!',
    data: [1, 2, 3, 4, 5],
  });
}
