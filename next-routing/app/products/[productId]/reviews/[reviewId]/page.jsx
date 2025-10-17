export default async function ProductReview(props) {
  const {productId,reviewId} = await props.params;

  return (
    <div className="main-container space-y-2">
      <div className="bg-[#fcfbfb] flex justify-start gap-5 flex-col p-10 rounded-md">
        <span className="text-2xl">Review {reviewId} for Product {productId}</span>
      </div>
    </div>
  );
}
