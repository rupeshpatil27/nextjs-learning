export default async function ProductDetails(props) {
  const { productId } = await props.params;

  return (
    <>
    <h1 className="text-center text-3xl font-bold">Product Details</h1>
      <span className="text-2xl">Product {productId}</span>
    </>
  );
}
