import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex gap-5 items-center justify-center mt-10 text-lg text-cyan-500">
        <Link href={"/order"}>Order</Link>
        <Link href={"/product"}>Product</Link>
      </div>
      <div className="main-container">
        <h1 className="text-4xl">Home Page</h1>
      </div>
    </>
  );
}
