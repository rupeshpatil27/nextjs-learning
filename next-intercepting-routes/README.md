# Next.js Intercepting Routes Example

This project demonstrates the use of intercepting routes in Next.js, where we use special route segment conventions `(.)` and `(..)` to define more flexible and reusable routes.

## Project Structure

```plaintext
/app
  /about
    /page.jsx                    <-- Main about page
    /( .. )contact/page.jsx      <-- Matches the 'contact' route one level above
    /( . )store/page.jsx         <-- Matches 'store' route on the same level as '/about'
    /store/page.jsx              <-- Main store page
  /contact
    /page.jsx                    <-- Main contact page

```