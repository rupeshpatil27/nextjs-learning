# Next.js Error Handling Example

This project demonstrates error handling and recovery in Next.js, with a special focus on the following areas:

- Implementing global error handling.
- Handling errors in nested routes.
- Error handling in layouts.


# 📁 Project Folder Structure

```text

app/
├── order/
│   ├── error.js              # Error handler for /order route
│   └── cart/
│       └── error.js          # Error handler for /order/cart route
│
├── product/
│   ├── error.js              # Error handler for /product route and child layouts
│   └── [productId]/
│       └── layout.js         # Layout for individual product page
│
├── global-error.js           # Global error handler
└── layout.js                 # Main layout for the app          

```



