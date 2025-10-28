export default async function ProductDetails(props) {
  const { productId } = await props.params;

  return (
    <>
      <span className="text-2xl">Product {productId}</span>
    </>
  );
}
