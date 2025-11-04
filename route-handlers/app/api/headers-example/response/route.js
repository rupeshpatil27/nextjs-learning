import { NextResponse } from 'next/server';

export async function GET() {
  const responseBody = {
    message: 'Check the Headers tab in Postman to see custom headers.',
    timestamp: new Date().toISOString(),
  };
  
  return new Response(JSON.stringify(responseBody), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'X-Generated-By': 'Nextjs-Route-Handler',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}
