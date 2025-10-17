export default async function ProductDetails(props) {
  const {productId} = await props.params;

  return (
    <div className="main-container space-y-2">
      <div className="bg-[#fcfbfb] flex justify-start gap-5 flex-col p-10 rounded-md">
        <span className="text-2xl">Product {productId}</span>
      </div>
    </div>
  );
}
