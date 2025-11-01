import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-8 bg-white shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Intercepting Routes Demo Home</h1>
      <p className="mb-6">Select a scenario below to test the different interception conventions. Click the link on the next page, then refresh the browser to see the difference.</p>
      
      <div className="space-y-4">
        <Link href="/same-level" className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150">
          Go to Same Level (.) Demo
        </Link>
        <Link href="/one-up" className="block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150">
          Go to One Level Up (..) Demo
        </Link>
        <Link href="/two-up/level-two" className="block bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-150">
          Go to Two Levels Up (..)(..) Demo
        </Link>
        <Link href="/root-level" className="block bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-150">
          Go to Root Level (...) Demo
        </Link>
        <hr className="my-4"/>
        <Link href="/target-page" className="block text-red-600 hover:underline">
          Go to Target Page Directly (Full Page)
        </Link>
      </div>
    </div>
  );
}


// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50">
//       <h1 className="text-xl font-bold">Next.js Intercepting Routes Demo</h1>
//       <h1 className="text-4xl font-bold text-gray-900">
//         Welcome to the Home Page
//       </h1>
//       <div className="mt-8 w-full max-w-4xl">
//         <h2 className="text-2xl font-semibold text-gray-800">
//           Project Structure
//         </h2>
//         <div className="mt-4 pl-4 text-sm text-gray-600">
//           <pre>
//             <code>
//               {`
//                 /page.jsx
//                 /about
//                   /page.jsx                    <-- Main about page
//                   /(..)contact/page.jsx        <-- Matches the 'contact' route one level above
//                   /(.)store/page.jsx           <-- Matches 'store' route on the same level as '/about'
//                   /store/page.jsx              <-- Main store page
//                 /contact
//                   /page.jsx                    <-- Main contact page
//               `}
//             </code>
//           </pre>
//         </div>
//       </div>
//     </div>
//   );
// }
