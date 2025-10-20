export default function ProductLayout({ children }) {
  return (
    <div className="product-layout">
      <h1 className="text-4xl font-bold text-cyan-500 my-10">Products List!</h1>
      <div className="bg-[#fcfbfb] flex justify-start gap-5 flex-col p-10 rounded-md">
        {children}
      </div>
    </div>
  );
}
