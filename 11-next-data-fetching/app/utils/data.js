export const getPosts = async () => {
  // Simulate a delay to demonstrate loading state
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
};
