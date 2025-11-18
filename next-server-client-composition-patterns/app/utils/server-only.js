import 'server-only';

export async function getSecretData() {
  const secretKey = "12345";
  if (!secretKey) {
    throw new Error('SECRET_API_KEY is not defined');
  }

  await new Promise(resolve => setTimeout(resolve, 500));

  console.log('Fetching secret data on the server...');
  return {
    message: "This is confidential information from the server.",
    source: `Fetched using API key: ${secretKey.slice(0, 5)}...`
  };
}

// New utility function for the interleaving example
export async function getServerData() {
    return {
        message: "This data was securely fetched on the server.",
        timestamp: new Date().toISOString()
    };
}
