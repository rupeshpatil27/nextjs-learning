# 🧭 Next.js Routing

Created as part of my learning journey with Next.js, this project focuses on mastering routing concepts through practical examples.

- ✅ Basic Static Routing
- ✅ Nested Routes
- ✅ Dynamic Routing
- ✅ Nested Dynamic Routes
- ✅ Catch-all Segments
- ✅ Layouts  
- ✅ Nested Layouts  
- ✅ Route Groups 
- ✅ Search Params
- ✅ Custom Not Found Page
- ✅ **Loading States with `loading.js`**  
- ✅ **State Reset with `template.js`**

# 📁 Project Folder Structure

```text

app/
├── (auth)/                    # Route group for auth
│   ├── login/
│   │   └── page.jsx           
│   └── register/
│       └── page.jsx           

├── about/
│   └── page.jsx               # Static route: /about

├── blog/                      # Nested routes
│   ├── first/
│   │   └── page.jsx           
│   └── second/
│       └── page.jsx           
│
│   └── page.jsx               

├── books/                     # Uses searchParams for filtering
│   ├── [bookid]/                  
│   │   └── page.jsx              
│   └── page.jsx                   

├── contact/
│   └── page.jsx               # Static route: /contact

├── job/
│   └── [[...slug]]/           # Catch-all route
│       └── page.jsx           # /job, /job/anything, /job/a/b/c, etc.

├── products/                  # Dynamic route with nested layout             
│   └── [productId]/           # Dynamic segment
│       ├── page.jsx           
│       └── reviews/           
│           └── [reviewId]/    # Nested dynamic route
│               ├── not-found.jsx  # Custom not found for invalid review
│               └── page.jsx 
│ 
│   ├── layout.js              # Layout for /products/*
|   └── page.jsx      

├── order/                        # Demonstrates loading.js and template.js usage                
│   ├── cart/
│   │   └── page.jsx              
│   ├── user/
│   │   └── page.jsx              
│   ├── page.jsx                  
│   ├── loading.js                # Custom loading UI using React Suspense
│   ├── template.js               # Wraps layout & resets state on route change

```