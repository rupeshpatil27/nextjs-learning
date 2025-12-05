import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ success: true }, {
    headers: {
      'Set-Cookie': `userId=; Path=/; HttpOnly; SameSite=Strict; Expires=${new Date(0).toUTCString()}`,
    },
  });
}