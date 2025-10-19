export default function ProductLayout({ children }) {
  return (
    <div className="main-container space-y-2">
      <div className="bg-[#fcfbfb] flex justify-start gap-5 flex-col p-10 rounded-md">
        <h1 className="text-4xl font-bold text-cyan-500">Products List!</h1>
        {children}
      </div>
    </div>
  );
}
