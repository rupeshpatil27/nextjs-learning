# Next.js `generateStaticParams` and `dynamicParams`.

This example demonstrates the Next.js concepts of generateStaticParams and dynamicParams.
These features are used to control which dynamic route segments should be statically generated at build time.

## Concepts Covered

### `generateStaticParams`

A function exported from a dynamic route page that generates an array of parameters. Next.js uses this array to pre-render the pages corresponding to those parameters during the build process, leading to high performance.

### `dynamicParams`

A route segment config option that determines the behavior of visits to dynamic routes that were not returned by `generateStaticParams`.

- `true` (Default): Pages not pre-rendered are server-rendered (SSR) on the first visit.
- `false`: Pages not pre-rendered return a 404 error.

## Demo: Static Products

This example simulates a product listing where we have a known, fixed list of products that can be pre-rendered for maximum speed.

### 🚀 How to Run the Demo

1. Navigate to the entry page in your browser:  
   [http://localhost:3000/](http://localhost:3000/)
2. Click the link to view the product list.
3. View a product detail page (IDs 1, 2, or 3) to see a statically generated page.
4. Test the 404 behavior by visiting a non-existent product ID, e.g.:
   [http://localhost:3000/products/99](http://localhost:3000/products/99)

## 📂 File Structure

```text
app/
├── page.js                     # Entry point
└── products/
    ├── page.jsx                 # Lists the products
    └── [productId]/
        └── page.jsx             # The dynamic page with generateStaticParams & dynamicParams log
```
