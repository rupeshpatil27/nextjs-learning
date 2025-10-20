"use client";

import { useSearchParams } from "next/navigation";

const Product = () => {
  const searchParams = useSearchParams();
   const category = searchParams.get("category");
  const color = searchParams.get("color");
  return <span>showing {category} with {color} color!</span>;
};

export default Product;
