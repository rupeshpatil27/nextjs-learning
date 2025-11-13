
const allProducts = [
    { id: '1', name: 'Laptop', price: 999, description: 'A powerful laptop for all your needs.' },
    { id: '2', name: 'Smartphone', price: 699, description: 'A sleek smartphone with great features.' },
    { id: '3', name: 'Headphones', price: 199, description: 'Noise-cancelling headphones for immersive audio.' },
];

// Runs at build time to tell Next.js which paths to pre-render
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    productId: product.id,
  }));
}

// Controls behavior for paths *not* returned above.
// 'false' means any other ID (e.g., /products/99) results in a 404.
export const dynamicParams = false; 

// The page component runs on the server (statically at build time in this case)
export default async function ProductPage({ params }) {
  const { productId } = await params;
  const product = allProducts.find(p => p.id === productId);

  // This check is mainly for development or if dynamicParams was set to true.
  // When dynamicParams = false, Next.js handles the 404 at a higher level.
  if (!product) {
    return (
      <div className="p-8 bg-red-100 border-l-4 border-red-500 text-red-700 min-h-screen">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p>The product with ID {productId} does not exist or was not statically generated.</p>
        <div className="mt-4">
          <a href="/products" className="text-blue-600 hover:underline">
            ← Back to list
          </a>
        </div>
      </div>
    );
  }

  // Styling with Tailwind
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-green-600">${product.price}</p>
        <p className="mt-4 text-sm text-gray-500">Rendered statically for ID: {productId}</p>
      </div>
      <div className="mt-4 max-w-md mx-auto">
        <a href="/products" className="text-blue-600 hover:underline">
          ← Back to list
        </a>
      </div>
    </div>
  );
}
