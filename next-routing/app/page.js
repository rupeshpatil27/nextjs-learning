import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex gap-5 items-center justify-center mt-10 text-lg text-cyan-500">
        <Link href={"/about"}>About</Link>
        <Link href={"/products"}>Product</Link>
        <Link href={"/order"}>Order</Link>
      </div>
      <div className="main-container">
        <h1 className="text-4xl">Home Page</h1>
      </div>
    </>
  );
}
