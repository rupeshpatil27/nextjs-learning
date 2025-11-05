export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Next.js Route Handlers Learning
      </h1>
      <p className="mb-6 text-gray-600">
        This project explores various Route Handler concepts using Next.js 16.
        All examples are designed to be tested using Postman.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-blue-600">
        Available Endpoints (Test with Postman):
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <code className="bg-gray-200 p-1 rounded">GET/POST /api/users</code>:
          Basic CRUD operations (List all, Create new).
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">
            GET/PUT/DELETE /api/users/[id]
          </code>
          : Single user operations.
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">
            GET /api/url-params?name=John
          </code>
          : Handles URL Query Parameters.
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">
            GET /api/headers-example/request
          </code>
          : Reading incoming request headers.
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">
            GET /api/headers-example/response
          </code>
          : Setting outgoing response headers.
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">
            GET /api/cookies-example
          </code>
          : Reading incoming cookies & setting outgoing cookies.
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">
            GET /api/redirect-example/v1
          </code>
          : Hitting V1 automatically redirects you to the V2 endpoint.
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">
            GET /api/caching-example
          </code>
          : Shows caching/revalidation.
        </li>

        <li>
          <code className="bg-gray-200 p-1 rounded">
            GET /api/protected-data
          </code>
          : **NEW** Authentication enforced by `proxy.js`. Must send
          `Authorization: Bearer my-secret-token-123` header to succeed.
        </li>
      </ul>
    </div>
  );
}
