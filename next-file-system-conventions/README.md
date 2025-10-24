# Next.js Advanced Features

This project explores advanced Next.js features such as custom loading UI, layout management, and performance optimizations.

## ✅ Features Implemented

- **loading.js**: Used React Suspense in `loading.js` for a custom loading experience during data fetches.
- **template.js**: Implemented `template.js` to wrap layouts and reset client component state for consistency across pages.


# 📁 Project Folder Structure

```text

app/
├── layout.js                   # Root layout for the entire application
├── page.js                     

├── order/                       
│   ├── Input.jsx                
│   ├── page.jsx                 
│   ├── loading.js               # Custom loading UI using React Suspense
│   ├── template.js              # Template to wrap layouts and reset Client Component state
│   ├── cart/                    
│   │   └── page.jsx             
│   ├── user/                    
│   │   └── page.jsx             

```