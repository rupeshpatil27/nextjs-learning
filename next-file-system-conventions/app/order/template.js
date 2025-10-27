import Link from "next/link";
import Input from "./Input";

export default function OrderLayout({ children }) {
  return (
    <>
      <h1 className="text-4xl font-bold text-cyan-500 my-10 text-center">
        Oders
      </h1>

      <div className="flex gap-5 items-center justify-center mt-10 text-lg text-cyan-500">
        <Link href={"/order/cart"}>Cart</Link>
        <Link href={"/order//user"}>User</Link>
      </div>
      <div className="flex justify-center mt-10 text-lg">
        <Input />
      </div>
      <div className="bg-[#fcfbfb] flex justify-start gap-5 flex-col p-10 rounded-md">
        {children}
      </div>
    </>
  );
}
