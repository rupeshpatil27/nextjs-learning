"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();

  const productId=pathName.split("/")[2]
  const reviewId=pathName.split("/")[4]
 
  return (
    <div className="main-container space-y-2">
      <div className="bg-[#fcfbfb] flex justify-start gap-5 flex-col p-10 rounded-md">
        <span className="text-2xl">Review {reviewId} Not Found for Product {productId}!</span>
      </div>
    </div>
  );
}
