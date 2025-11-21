# Next.js Data Fetching

Welcome to my Next.js learning repository! This project focuses on understanding different **data fetching** strategies available in the Next.js app router

## 🚀 Concepts Covered

## 1. **Data Fetching in Server Components**
Learn how to fetch data directly inside **Server Components** using `async/await`.  
This runs entirely on the server, allowing pages to load faster with less JavaScript sent to the browser.
  
**Demonstrates:**
- Fetching data directly in RSCs  
- Includes loading UI and error UI for better UX.   
- Cleaner + more secure data fetching  

**Location:**  
`app/server-fetching/page.jsx`


## 2. **Data Fetching in Client Components**
Understand how data is fetched **on the client side** by using React hooks like `useState` and `useEffect` in components marked with `'use client'`.
Client fetching is useful for UI interactions, real-time updates, and data that depends on browser state.
 
**Demonstrates:** 
- `useEffect`, `useState` for data fetching  
- Maintaining local UI loading/error states  

**Location:**  
`app/client-fetching/page.jsx`


## 3. **Sequential Data Fetching**
Learn the "waterfall" pattern where a second fetch depends on the result of the first.  
Useful when data has a relationship (e.g., user → User Posts).
 
**Demonstrates:**
- Dependent server fetches  
- Sequential async operations  
- Visualizing total load time with Suspense  

**Locations:**  
- `app/sequential-fetching/page.jsx`


## 4. **Parallel Data Fetching**
Fetch multiple independent data sources **at the same time** for maximum performance.  
This pattern uses multiple Server Components + multiple Suspense boundaries.

**Demonstrates:**  
- Multiple Server Components (`PostList` + `AlbumList`)  
- Concurrent server data fetching  
- `Promise.all` logic  
- Independent streaming with Suspense 

**Locations:**  
- `app/parallel-fetching/page.jsx`


# 📁 Project Structure

```text
app/
├── client-fetching/
│   └── page.jsx                 # Client Component example
│
├── server-fetching/
│   ├── error.jsx                # Error UI for Server Fetching
│   ├── loading.jsx              # Loading UI for Server Fetching (Suspense)
│   └── page.jsx                 # Server Component example
│
├── parallel-fetching/
│   ├── AlbumList.jsx            # Server Component for Album data
│   ├── loading.jsx              # Route-level loading UI
│   ├── page.jsx                 # Main parallel fetching page (with Suspense boundaries)
│   └── PostList.jsx             # Server Component for Post data
│
├── sequential-fetching/
│   ├── page.jsx                 # Main page showing sequential data fetching
│   └── UserDetail.jsx           # Server Component fetching sequentially internally
│
├── utils/
│   └── data.js                  # Mock data fetching / API simulation
│
└── page.jsx                     # Home/Overview Page
```