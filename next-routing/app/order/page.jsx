import Link from "next/link";

export const metadata = {
  title: "Order Page",
  description: "Order details",
};

export default function Orders() {
  return (
    <>
      <div className="flex gap-5 items-center justify-center mt-10 text-lg text-cyan-500">
        <Link href={"/order/cart"}>Cart</Link>
        <Link href={"/order//user"}>User</Link>
      </div>
      <div className="main-container">
        <h1 className="text-4xl">Order Page</h1>
      </div>
    </>
  );
}
