export async function fetchData(pageName, duration= 2000) {
  const start = Date.now();
  console.log(`Fetching data for ${pageName}... (starts at ${start})`);

  // Artificially delay for demo purposes
  await new Promise(resolve => setTimeout(resolve, duration));

  const end = Date.now();
  const timestamp = new Date().toISOString();
  console.log(`Data fetch for ${pageName} completed at ${end}. Took ${end - start}ms`);

  return {
    timestamp,
    data: `This is the data for ${pageName}.`,
    randomNumber: Math.random() // Use Math.random() to prove if the page is cached or not
  };
}
