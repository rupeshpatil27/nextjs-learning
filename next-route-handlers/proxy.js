import { NextResponse } from 'next/server';

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  const headers = await request.headers;
  const authHeader = headers.get('authorization');

  if (pathname.startsWith('/api/protected-data')) {

    if (authHeader !== 'Bearer my-secret-token-123') {
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Authentication failed' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/protected-data/:path*',
};