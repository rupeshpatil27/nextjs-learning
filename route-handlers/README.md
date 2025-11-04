# Next js Route Handlers

This Project is dedicated to learning and demonstrating Next.js 15+ Route Handlers within the `app` router. The examples cover basic to advanced concepts, all designed to be tested using a tool like Postman.

## Testing with Postman

Use the following endpoints to test the various Route Handler concepts:

### 1. Basic Users API (CRUD)

- **GET List:** `http://localhost:3000/api/users`
- **POST Create:** `http://localhost:3000/api/users` (Body: `{ "name": "Test User", "role": "admin" }`)
- **GET Single:** `http://localhost:3000/api/users/1`

### 2. URL Query Parameters

- **GET:** `http://localhost:3000/api/url-params?name=John&sort=desc`

### 3. Headers in Route Handlers

- **GET Read Request Headers:** `http://localhost:3000/api/headers-example/request`
  - _Test:_ Add custom headers in Postman (e.g., `X-Custom-Header: TestValue`) to see them in the response.
- **GET Set Response Headers:** `http://localhost:3000/api/headers-example/response`
  - _Test:_ Check the "Headers" tab in the Postman _response pane_ for `X-Generated-By`.

### 4. Cookies in Route Handlers

- **GET:** `http://localhost:3000/api/cookies-example`
  - _Test:_ Use Postman's "Cookies" manager to add a `theme` cookie. Run the request twice; the `last_visit` timestamp updates on the second try.

### 5. Redirects in Route Handlers

- **GET:** to `http://localhost:3000/api/redirect-example/v1`
- This V1 API endpoint tells Postman to immediately go to the V2 endpoint (`/api/redirect-example/v2`) and return that response instead. This handles API version upgrades seamlessly.

### 6. Caching in Route Handlers

- **GET:** `http://localhost:3000/api/advanced/caching-example`
  - _Note:_ Caching only works in **production mode** (`npm run build` then `npm run start`). The `timestamp` updates based on the `revalidate` setting.
