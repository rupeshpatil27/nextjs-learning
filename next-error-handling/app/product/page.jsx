import Link from "next/link";

export const metadata = {
  title: "Product Page",
  description: "Product details",
};

export default async function Products() {
  return (
    <>
      <h1 className="text-4xl text-center">Product Page</h1>

      <div className="flex flex-col gap-5 items-center justify-center mt-10 text-lg text-cyan-500">
        <Link href={"/product/1"}>Product 1</Link>
        <Link href={"/product/2"}>Product 1</Link>
      </div>
    </>
  );
}
