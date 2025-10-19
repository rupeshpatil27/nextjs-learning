"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();

  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];

  return (
    <>
      <span className="text-2xl">
        Review {reviewId} Not Found for Product {productId}!
      </span>
    </>
  );
}
