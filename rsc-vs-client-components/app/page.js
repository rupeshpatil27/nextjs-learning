import ServerList from './components/ServerList';
import ClientCounter from './components/ClientCounter';

export default async function RSCvsClientPage() {
  const initialData = [
    { id: 1, name: 'Item A', likes: 10 },
    { id: 2, name: 'Item B', likes: 25 },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        RSC vs Client Components Demo
      </h1>
      <p className="mb-8 text-gray-600">
        This page demonstrates how to compose Server Components (for data fetching and speed) 
        and Client Components (for interactivity and hooks) in a Next.js.
      </p>
      
      {/* Server Component */}
      <ServerList items={initialData} /> 

      <hr className="my-10" />

      {/* Client Component */}
      <ClientCounter initialLikes={initialData[0].likes} itemName={initialData[0].name} />
    </div>
  );
}
