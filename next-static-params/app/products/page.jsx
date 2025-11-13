import Link from 'next/link';

const getProducts = async () => {
  return [
    { id: '1', name: 'Laptop' },
    { id: '2', name: 'Smartphone' },
    { id: '3', name: 'Headphones' },
  ];
};

export default async function ProductsList() {
  const products = await getProducts();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products List</h1>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline">
              {product.name} (ID: {product.id})
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link href="/" className="text-indigo-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
