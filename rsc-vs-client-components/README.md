# React Server Components (RSC) vs. Client Components Demo

This Project is dedicated to learning and demonstrating of how to implement and differentiate between React Server Components (RSC) and Client Components (CC).


## Concepts Covered

*   **Server Components (RSC):** Ideal for data fetching, backend logic, reduced bundle sizes, and initial page load performance. They run only on the server.
*   **Client Components (CC):** Essential for interactivity, event listeners, managing state using hooks (`useState`, `useEffect`), and browser-specific APIs. They are bundled and executed in the user's browser.
*   **The `'use client'` Directive:** The specific "network boundary" marker that tells Next.js and React where the client-side module graph begins.

## Project Structure

```text
app/
├── page.jsx               # Main entry point (Default: Server Component)
├── components/
│   ├── ServerList.jsx     # Child Server Component
│   └── ClientCounter.jsx  # Child Client Component ('use client' at top)
```