export default async function PhotoModal({ params }) {

  const {id} = await params;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-11/12 md:w-2/3 max-h-[90vh] overflow-hidden transform transition-all duration-300"

      >
        {/* Modal Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">
            Modal View for Photo #{id}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            **Intercepted Route:** This URL is actually `/advanced/photo/
            {id}`, but it's rendered here as an overlay.
          </p>
          <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
            <span className="text-gray-600 text-xl">
              Image Placeholder: ID {id}
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
