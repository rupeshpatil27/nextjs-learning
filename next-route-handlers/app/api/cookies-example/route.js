import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'light';
  const lastVisit = cookieStore.get('last_visit')?.value || 'First visit!';

  const response = NextResponse.json({
    message: 'Reading incoming cookies and setting a new one.',
    incomingCookies: {
      theme: theme,
      lastVisit: lastVisit,
    },
  });

  cookieStore.set("theme","dark")

  // 3. SET A NEW COOKIE in the response headers
  // The client's browser will save this cookie when it receives the response.
  response.headers.set(
    'Set-Cookie',
    `last_visit=${new Date().toISOString()};`
  );

  return response;
}
