import React, { Suspense } from 'react';
import SlowComponent from './SlowComponent';

const LoadingFallback = (
  <div className="p-6 mt-4 bg-gray-100 border border-gray-300 shadow-md rounded-lg animate-pulse">
    <h3 className="text-xl font-semibold text-gray-700 mb-2">
      ⏳ Loading Slow Data...
    </h3>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    
    <p className="mt-4 text-sm text-gray-500 italic">
      This is the explicit **Suspense Fallback** being displayed instantly.
    </p>
  </div>
);

export default function StreamingPage() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white shadow-xl min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2">
        Next.js Streaming Example
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        This header and paragraph are static and were streamed to the client **immediately**.
      </p>

      {/* The explicit Suspense boundary wraps the SlowComponent. 
        It immediately renders the 'fallback' (LoadingFallback) 
        while SlowComponent is waiting for its data.
      */}
      <Suspense fallback={LoadingFallback}>
        <SlowComponent /> 
      </Suspense>

      <div className="mt-8 pt-4 border-t border-gray-200">
        <p className="text-base text-gray-600">
          This footer content is also static and streams **immediately**, proving the
          slow component only blocks its own boundary, not the entire page.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          (To see the streaming effect, navigate directly to `/slow-data` and notice the 
          instant loading state, followed by the content appearing after 3 seconds.)
        </p>
      </div>
    </main>
  );
}