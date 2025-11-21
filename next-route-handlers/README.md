# 🚀 Next js Route Handlers

This Project is dedicated to learning and demonstrating Next.js 16 Route Handlers. The examples cover basic to advanced concepts, all designed to be tested using a tool like Postman.

# 📁 Project Folder Structure

```text

/route-handlers
├── app/
│   ├── api/
│   │   ├── users/
│   │   │   ├── [id]/
│   │   │   │   └── route.js             # Handles GET Single User
│   │   │   └── route.js                 # Handles GET List/POST Create
│   │   ├── url-params/
│   │   │   └── route.js                 # Handles URL Query Parameters
│   │   ├── headers-example/
│   │   │   ├── request/
│   │   │   │   └── route.js             # Handles Read Request Headers
│   │   │   └── response/
│   │   │       └── route.js             # Handles Set Response Headers
│   │   ├── cookies-example/
│   │   │   └── route.js                 # Handles Cookies in Route Handlers
│   │   ├── redirect-example/
│   │   │   ├── v1/
│   │   │   │   └── route.js             # Handles Redirects in Route Handlers
│   │   │   └── v2/
│   │   │       └── route.js
│   │   ├── caching-example/
│   │   │   └── route.js                 # Handles Caching
│   │   └── protected-data/
│   │       └── route.js                 # The protected API endpoint
│   ├── layout.jsx                       # Root layout
│   └── page.jsx                         # Home page
└── proxy.js                             # Next.js 16 Proxy File (ROOT LEVEL)

```

## 📮 Testing with Postman

Use the following endpoints to test the various Route Handler concepts:

### 1. Basic Users API (CRUD) 🧑‍💻

- **GET List:** `http://localhost:3000/api/users`
- **POST Create:** `http://localhost:3000/api/users` (Body: `{ "name": "Test User", "role": "admin" }`)
- **GET Single:** `http://localhost:3000/api/users/1`

### 2. URL Query Parameters ❓

- **GET:** `http://localhost:3000/api/url-params?name=John&sort=desc`

### 3. Headers in Route Handlers 📨

- **GET Read Request Headers:** `http://localhost:3000/api/headers-example/request`
  - _Test:_ Add custom headers in Postman (e.g., `X-Custom-Header: TestValue`) to see them in the response.
- **GET Set Response Headers:** `http://localhost:3000/api/headers-example/response`
  - _Test:_ Check the "Headers" tab in the Postman _response pane_ for `X-Generated-By`.

### 4. Cookies in Route Handlers 🍪

- **GET:** `http://localhost:3000/api/cookies-example`
  - _Test:_ Use Postman's "Cookies" manager to add a `theme` cookie. Run the request twice; the `last_visit` timestamp updates on the second try.

### 5. Redirects in Route Handlers ↪️

- **GET:** to `http://localhost:3000/api/redirect-example/v1`
- This V1 API endpoint tells Postman to immediately go to the V2 endpoint (`/api/redirect-example/v2`) and return that response instead. This handles API version upgrades seamlessly.

### 6. Caching in Route Handlers ⏱️

- **GET:** `http://localhost:3000/api/caching-example`
  - _Note:_ Caching only works in **production mode** (`npm run build` then `npm run start`). The `timestamp` updates based on the `revalidate` setting.

## 7. `proxy.js` for Authentication (Next.js 16 Update) 🔒

In Next.js 16, `middleware.js` has been renamed to **`proxy.js`** to clarify its function. This example demonstrates how the proxy intercepts requests to a protected API route (`/api/protected-data`), enforcing an authentication check before the route handler is executed.

_Files involved: `proxy.js` (at the root) and `app/api/protected-data/route.js`._

- **GET Protected Data (Failure Case):** `http://localhost:3000/api/protected-data`

  - **Expected Result:** `401 Unauthorized` status and a JSON error message. The proxy blocks the request.

- **GET Protected Data (Success Case):** `http://localhost:3000/api/protected-data`
  - _Test:_ In Postman, go to the **Headers** tab and add:
    - **Key:** `Authorization`
    - **Value:** `Bearer my-secret-token-123`
  - **Expected Result:** `200 OK` status and the protected JSON data response. The proxy allows the request to proceed.
