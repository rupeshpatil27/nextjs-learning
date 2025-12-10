# 🚀 Next.js Authentication

This project demonstrates a robust full-stack implementation of user authentication using Next.js (App Router), MongoDB for data storage, and a feature-rich Todo application to showcase protected routes and data management.

## Features Implemented

This example covers core authentication flows and full CRUD operations within the context of a secure application:

*   **User Authentication:**
    *   Secure user registration process with password hashing.
    *   User login process with robust password verification.
    *   Session-based login management.
    *   Implementation of signing and verifying cookies for secure session handling.
*   **Data Management & Security:**
    *   Integration with **MongoDB** as the persistent data store.
    *   **Protected API Endpoints:** Authentication middleware is used to safeguard API routes, ensuring only authenticated users can access, create, update, or delete data.