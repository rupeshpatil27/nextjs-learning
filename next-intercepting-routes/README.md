# Next.js Intercepting Routes Example

This project demonstrates the use of intercepting routes in Next.js, where we use special route segment conventions `(.)` and `(..)` to define more flexible and reusable routes.

## Project Structure

```text

app/
├── (pages)/               
│   ├── one-up/
│   ├── root-level/
│   ├── same-level/
│   └── two-up/level-two/
├── layout.tsx             # Root layout
├── page.tsx               # Main application home page
├── target-page/
│   └── page.tsx           # The *actual* target destination page


```