# 🚀 Static vs. Dynamic Rendering
This Project is dedicated to learning and demonstrating the distinction between Static Rendering and Dynamic Rendering in Next.js.

# 📁 Project Folder Structure

```text
static-and-dynamic-rendering/
├── app/
│   ├── dynamic-page-a/
│   │   └── page.jsx           # Dynamic Rendering (using cookies())
│   ├── dynamic-page-b/
│   │   └── page.jsx           # Dynamic Rendering (using export const dynamic)
│   ├── lib/
│   │   └── data.js            # Helper function to simulate data fetching/logging
│   ├── static-page/
│   │   └── page.tsx           # Static Rendering (Default behavior)
│   └── page.tsx               # Homepage
```

# 🌟 Concepts Demonstrated

1.  **Static Rendering**
    *   **Default Behavior:** Next.js uses static rendering by default. Your pages are pre-built into HTML files when you run `npm run build`.
    *   **Caching:** The resulting HTML is cached and reused for every user request until the next build.
    *   **Example Page:** [`/static-page`](http://localhost:3000/static-page)

2.  **Dynamic Rendering (Dynamic Pages)**
    *   **Request Time:** Pages are rendered fresh for each user request.
    *   **Enabling Dynamic Mode:** This happens automatically when you use dynamic functions (`cookies()`, `headers()`, `searchParams`) or explicitly set `export const dynamic = 'force-dynamic'`.
    *   **Examples Pages:**
        *   [`/dynamic-page-a`](http://localhost:3000/dynamic-page-a) (Uses `cookies()`)
        *   [`/dynamic-page-b`](http://localhost:3000/dynamic-page-b) (Uses `export const dynamic`)
