export const getPosts = async () => {
  // Simulate a delay to demonstrate loading state
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
};


// Utility function to add an artificial delay to simulate network latency
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchUserData() {
  await wait(1000);
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);

  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
}

export async function fetchUserPosts(userId) {
  await wait(1500); 
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch user posts');
  }
  return response.json();
}

export async function fetchUserAlbums(userId) {
  await wait(1200);
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch user albums');
  }
  return response.json();
}

