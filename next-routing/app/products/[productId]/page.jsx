import Product from "./Product";

export default async function ProductDetails(props) {
  const { productId } = await props.params;
  const searchParams = await props.searchParams;

  const category = searchParams.category;
  const color = searchParams.color;

  return (
    <>
      <h1 className="text-center text-3xl font-bold">Product Details</h1>
      <Product/>
      <span className="text-2xl">Product {productId}</span>

      <div className="flex flex-col gap-2">
        <h1 className="text-neutral-400">Features</h1>
        <span>Category : {category}</span>
        <span>Color : {color}</span>
      </div>
    </>
  );
}
