export default function PhotoModalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div 
        className="bg-white rounded-xl shadow-2xl w-11/12 md:w-2/3 h-[500px] p-6 animate-pulse"
      >
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg"></div>
      </div>
    </div>
  );
}