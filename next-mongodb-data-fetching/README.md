# Next.js Learning: MongoDB Integration

This Project focuses on integrating a Next.js application (using the App Router) with a MongoDB database, covering foundational knowledge required to perform full CRUD operations with modern Next.js features.

## 🚀 Concepts Covered

The examples within this directory provide practical demonstrations of the following concepts:

# Backend/Server Concepts

- **MongoDB Integration**: Connecting to a NoSQL database using Mongoose ODM (Object Data Modeling).
- **React Server Components (RSC)**: Implementing server-first logic for robust data handling.
- **Environment Variables**: Securely storing sensitive credentials (like `MONGODB_URI`) using a `.env` file.
- **Server Actions (CRUD)**: Implementing Create, Read, Update, and Delete operations securely on the server using Next.js Server Actions and the `use server` directive.
- **Instant UI Updates & Navigation**: Using `revalidatePath` to clear the Next.js cache and `redirect` to navigate users after successful data mutations.

# Frontend/Client Concepts

- **`useFormStatus` Hook**: Providing a better user experience by showing pending states (e.g., "Saving..." button text) while a server action is running.
- **`useActionState` Hook**: Managing and displaying validation errors or success messages returned from a server action on the client side.

## 📁 Project Structure

Here is an overview of the key files involved in this example:

| File/Path                  | Description                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| `models/postModal.js`            | Defines the Mongoose schema for a blog post.                               |
| `lib/connectDB.js`            | Utility function to establish a connection to the MongoDB instance.         |
| `app/blog-fetch/page.jsx`   | Main blog index displaying posts and using delete actions (`PostCard`).                     |
| `app/blog-fetch/create/page.jsx`   | Form page for submitting new posts using `useActionState` and `useFormStatus`.                     |
| `app/blog-fetch/[id]/edit/page.jsx`   | Server component page to fetch specific post data for editing.                     |
| `app/blog-fetch/actions.js`   | Defines all server-side functions (createPost, updatePost, deletePost).                     |
| `.env`                | (Not committed to Git) Contains your private `MONGODB_URI`.                 |