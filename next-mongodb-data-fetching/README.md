# Next.js Learning: MongoDB Integration

This Project focuses on integrating a Next.js application (using the **App Router**) with a MongoDB database. It covers foundational knowledge required to perform standard database operations within a Next.js environment.

## 🚀 Concepts Covered

The examples within this directory provide practical demonstrations of the following concepts:

*   **MongoDB Integration**: Connecting to a NoSQL database using Mongoose ODM (Object Data Modeling).
*   **React Server Components (RSC)**: Implementing server-first logic for robust data handling.
*   **Environment Variables**: Securely storing sensitive credentials (like `MONGODB_URI`) using a `.env` file.
*   **Data Mutation & Server Actions**: Handling form submissions and database writes securely on the server using Next.js Server Actions and the `'use server'` directive.
*   **Instant UI Updates**: Using `revalidatePath` to clear the Next.js cache and instantly reflect database changes in the UI.

## 📁 Project Structure

Here is an overview of the key files involved in this example:

| File/Path                  | Description                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| `models/postModal.js`            | Defines the Mongoose schema for a blog post.                               |
| `lib/connectDB.js`            | Utility function to establish a connection to the MongoDB instance.         |
| `app/blog-fetch/page.jsx`   | Example page demonstrating core database interactions.                     |
| `app/blog-fetch/create/page.jsx`   | Form page for submitting new posts via Server Actions.                     |
| `app/blog-fetch/actions.js`   | Defines the server-side functions for data mutation (createPost).                     |
| `.env`                | (Not committed to Git) Contains your private `MONGODB_URI`.                 |