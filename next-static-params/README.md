# Next.js `generateStaticParams`, `dynamicParams` And Streaming.

This example demonstrates the Next.js concepts of generateStaticParams and dynamicParams.
These features are used to control which dynamic route segments should be statically generated at build time.

This example demonstrates two Next.js concepts:

1.  **`generateStaticParams` and `dynamicParams`**: Controlling the static generation of dynamic route segments at build time and enforcing route validity with **`dynamicParams`**.

2.  **Streaming**: Improving perceived performance by showing a fast loading state while slow-loading components asynchronously stream their data into the page.

## Concepts Covered

### 1. `generateStaticParams` & `dynamicParams`

This section demonstrates how to control which dynamic routes are pre-rendered at build time versus which are handled at request time.

#### `generateStaticParams`

A function exported from a dynamic route page that provides an array of parameters. Next.js uses this array to **pre-render** the corresponding pages during the build process, resulting in highly performant, static pages.

#### `dynamicParams`

A route segment config option that determines the behavior of visits to dynamic routes that were not returned by `generateStaticParams`.

- `true` (Default): Pages not pre-rendered are server-rendered (SSR) on the first visit.
- `false`: Pages not pre-rendered return a 404 error.

### 2. Streaming with Explicit `<Suspense>`

This concept demonstrates how Next.js can send HTML to the client in chunks. This allows the user to see the page structure and static content immediately while slow-loading components are replaced by a fallback UI.

The core mechanism is wrapping a Server Component that performs a slow data fetch (using `await`) with the React **`<Suspense>`** component.

## ⚙️ Demos

### Demo 1: Static Products (`generateStaticParams`)

This demo simulates a product catalog where we pre-render a known set of products for maximum speed and strictly control access to unlisted IDs.

1. **Entry Point:** Navigate to the main page and follow the link: [http://localhost:3000/products](http://localhost:3000/products)
2. **Success Test:** View a statically generated page (e.g., `/products/1`).
3. **404 Test:** Test the strict behavior of `dynamicParams = false` by visiting a non-existent ID (e.g., `/products/99`).

### Demo 2: Streaming (`<Suspense>`)

This demo highlights how to prevent a slow data fetch from blocking the entire page render, thereby improving user experience.

1. **Entry Point:** Navigate directly to the streaming page: [http://localhost:3000/slow-data](http://localhost:3000/slow-data)
2. **Observation:** Notice that static text loads instantly, and a loading state appears immediately, while the slow-loading component (simulated 3-second delay) "streams in" later.

## 📂 Project Structure

```text
app/
├── page.js                     # Home page
├── products/
│   ├── page.jsx                # Products list page
│   └── [productId]/
│       └── page.jsx            # Demo 1: Uses generateStaticParams & dynamicParams
└── slow-data/
    ├── page.jsx                # Demo 2: Uses explicit <Suspense>
    └── SlowComponent.jsx       # The component that simulates a slow data fetch
```
