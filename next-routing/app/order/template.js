import Input from "./Input";

export default function OrderLayout({ children }) {
  return (
    <div className="product-layout">
      <h1 className="text-4xl font-bold text-cyan-500 my-10 text-center">
        Oders
      </h1>

      <Input />
      <div className="bg-[#fcfbfb] flex justify-start gap-5 flex-col p-10 rounded-md">
        {children}
      </div>
    </div>
  );
}
