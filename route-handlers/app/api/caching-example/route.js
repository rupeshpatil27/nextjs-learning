
export const revalidate = 10; 

export async function GET() {
  const timestamp = new Date().toISOString(); 

  // Check if we are running in development mode for user debugging
  const envStatus = process.env.NODE_ENV === 'development' 
    ? 'Development Mode (Caching disabled by Next.js in dev)' 
    : 'Production Mode (Caching active)';

  return new Response(JSON.stringify({
    message: 'This response is statically cached and revalidated.',
    environment: envStatus,
    timestamp: timestamp,
    revalidateSeconds: revalidate,
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
