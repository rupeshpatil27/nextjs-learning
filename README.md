# Next.js Learning Repository

Welcome to my **Next.js Learning** repository! This collection of examples serves as a practical guide and personal study log for mastering various concepts within the Next.js framework.

Each folder is a self-contained Next.js project dedicated to illustrating specific features.

## 📁 Repository Structure

The repository is organized into several self-explanatory project folders:


| **Folder Name**               | **Description**                                                                                         |
|-------------------------------|---------------------------------------------------------------------------------------------------------|
| [`next-routing`](./next-routing)                 | A comprehensive guide to fundamental and advanced routing concepts in Next.js.                           |
| [`next-parallel-routes`](./next-parallel-routes)         | How to manage multiple independent routes within the same layout, ideal for dashboards or feeds.          |
| [`next-intercepting-routes`](./next-intercepting-routes)     | Examples of using intercepting routes to create complex UI patterns, like modals, without full page reloads. |
| [`next-error-handling`](./next-error-handling)          | Demonstrations of implementing robust error boundaries and handling errors across different application scopes. |
| [`route-handlers`](./route-handlers)               | Examples of creating API endpoints using Route Handlers (GET, POST, etc.) and managing requests.         |
| [`rsc-vs-client-components`](./rsc-vs-client-components)               | A practical demo of React Server Components (RSC) vs Client Components (CC).         |
| [`static-and-dynamic-rendering`](./static-and-dynamic-rendering)               | Demonstrations of Static Rendering and Dynamic Rendering.         |


# ✅ Concepts Covered

This repository explores a variety of advanced Next.js concepts through practical examples. Below is a detailed breakdown of the topics covered across the different example projects.

## 🌐 Routing Fundamentals (next-routing)

This project covers the foundational elements of the **App Router** in Next.js:

- **Basic Static Routing**: Creating pages with simple folder structures.
- **Nested Routes**: Building hierarchical page structures.
- **Dynamic Routing**: Handling variable segments in URLs (e.g., `/users/[id]`).
- **Nested Dynamic Routes**: Combining static and dynamic nested segments.
- **Catch-all Segments**: Using `[...]` to capture multiple dynamic path segments.
- **Layouts & Nested Layouts**: Persisting UI elements and maintaining state across multiple pages using `layout.js`.
- **Route Groups**: Organizing files without affecting the URL structure using folder naming conventions.
- **Search Params**: Accessing and utilizing URL search parameters (`?q=query`).
- **Custom Not Found Page**: Implementing a custom `not-found.js` file for better error handling.
- **Loading States**: Showing an instant loading UI using `loading.js`.
- **State Reset**: Using `template.js` to create new instances of layout components and reset state on navigation.

## 🎭 Parallel Routes (next-parallel-routes)

This section focuses on managing multiple independent routes concurrently within the same layout structure:

- **Parallel Routes**: Allows simultaneous or conditional rendering of pages within the same layout (ideal for dashboards, feeds, etc.).
- **default.js**: Defining a fallback page for when a slot is unmatched (e.g., when linking directly to the dashboard root without the expected dynamic context).
- **Conditional Routes**: Demonstrates how to conditionally render different routes based on specific application logic.

## 📸 Intercepting Routes (next-intercepting-routes)

This project demonstrates how to create overlays and modals that visually "intercept" navigation without changing the underlying URL structure:

- **All Interception Matchers**: Implements and documents the various conventions:
  - `.`: Same segment level.
  - `(..)`: One level up.
  - `(..)(..)`: Two levels up.
  - `(...)`: Root directory.
- **Parallel Routes for Modals**: Uses the `@modal` slot for complex overlays..
- **Advanced Dynamic Interception**: A photo gallery example demonstrating dynamic interception (e.g., clicking a photo in the gallery opens a modal that intercepts the link to the actual photo page).

## ❌ Error Handling (next-error-handling)

This area covers implementing robust UI error boundaries using `error.js` files:

- **Global Error Handling**: Implementing error handling at the global layout level.
- **Nested Routes Error Handling**: Handling errors specifically within nested routes/segments.
- **Error Handling in Layouts**: Managing errors within individual layouts themselves.

## ⚙️ Route Handlers (route-handlers)

This section explores creating API endpoints using the `app/api` directory structure:

- **Route Handlers**: Examples for standard HTTP methods (GET, POST, PUT, PATCH, DELETE).
- **URL Query Parameters**: Reading data from the request URL.
- **Request Management**: Demonstrates how to handle headers, cookies, redirects, and caching options within server-side handlers.
- **Next.js 16 Proxy (formerly Middleware):** This section includes examples using the new `proxy.ts` (or `.js`) file located at the project root. We demonstrate advanced request handling, proxying internal API calls, and implementing custom redirects/rewrites.

## 🔄 React Server Components (RSC) vs. Client Components (rsc-vs-client-components)

This section covers the fundamental differences between code running on the server versus the browser:

*   **Server Components (RSC):** Ideal for data fetching, backend logic, reduced bundle sizes, and initial page load performance. They run only on the server.
*   **Client Components (CC):** Essential for interactivity, event listeners, managing state using hooks (`useState`, `useEffect`), and browser-specific APIs. They are bundled and executed in the user's browser.
*   **The `'use client'` Directive:** The specific "network boundary" marker that tells Next.js and React where the client-side module graph begins.


## 🏗️ Static And Dynamic Rendering (static-and-dynamic-rendering)

This module clarifies how Next.js determines when and where your page HTML is generated:

### 1. Static Rendering

*   **Default Behavior:** In Next.js, static rendering is the default strategy for Server Components. Page HTML is generated once during the application's build process.
*   **Caching:** The resulting HTML is efficiently cached and served instantly for all subsequent user requests.
*   **Example Page:** Demonstrations can be found in the project's `/static-page` route.

### 2. Dynamic Rendering (Dynamic Pages)

*   **Request Time:** Pages are generated dynamically on the server for every individual request made by a user.
*   **Enabling Dynamic Mode:** This mode is automatically enabled when a component utilizes dynamic server functions (such as `cookies()`, `headers()`, or `searchParams`) or when explicitly configured using `export const dynamic = 'force-dynamic'`.
*   **Examples Pages:**
    *   `/dynamic-page-a`: Demonstrates automatic dynamic rendering enabled via `cookies()`.
    *   `/dynamic-page-b`: Demonstrates explicit dynamic rendering using the `dynamic` export option.


## 🚀 Getting Started

To run any of these examples:

1. Clone the repository.
2. Navigate into the specific project folder you wish to explore (e.g., `cd nextjs-learning/next-routing`).
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
    ```
4. Run the development server:
   ```bash
   npm run dev
    # or
   yarn dev
    ```
5. Open `http://localhost:3000` in your browser.