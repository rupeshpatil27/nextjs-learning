import { notFound } from "next/navigation";

export default async function ProductReview(props) {
  const { productId, reviewId } = await props.params;

  if (parseInt(productId) <= 5) {
    notFound();
  }

  return (
    <>
      <span className="text-2xl">
        Review {reviewId} for Product {productId}
      </span>
    </>
  );
}
