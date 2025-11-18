import ClientInteractive from "./components/ClientInteractive";
import InteractiveWrapper from "./components/InteractiveWrapper";
import ServerDataDisplay from "./components/ServerDataDisplay";
import SlickCarouselWrapper from "./components/SlickCarouselWrapper";
import ThemeToggle from "./components/ThemeToggle";
import { getSecretData } from "./utils/server-only";

export default async function Home() {
  const secretData = await getSecretData();

  return (
    <main className="container mx-auto p-8 max-w-4xl space-y-12 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100 transition-colors">
      <div className="flex justify-between items-center pb-8 border-b dark:border-gray-700">
        <h1 className="text-4xl font-extrabold">
          Next.js Server And Client Composition Patterns
        </h1>
        <ThemeToggle />
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        This application demonstrates key concepts of server and client
        component composition in the Next.js.
      </p>

      {/* Server Component Patterns Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-500">
          Server Component Patterns
        </h2>

        {/* server-only code example */}
        <div className="rounded-lg border border-gray-300 p-6 bg-white dark:bg-gray-800 shadow-sm">
          <h3 className="text-xl font-bold">Server-Only Code</h3>
          <p className="text-gray-700 dark:text-gray-300">
            This data is fetched using a utility function (`getSecretData`)
            marked with `server-only`. This ensures the sensitive API key
            remains on the server and is never included in the client-side
            bundle.
          </p>
          <pre className="mt-4 p-4 text-sm bg-gray-100 dark:bg-gray-900 rounded whitespace-pre-wrap">
            {JSON.stringify(secretData, null, 2)}
          </pre>
        </div>

        {/* third-party packages example */}
        {/* The Server Component renders the SlickCarouselWrapper component, which contains the react-slick UI */}
        <div className="rounded-lg border border-gray-300 p-6 bg-white dark:bg-gray-800 shadow-sm">
          <h3 className="text-xl font-bold mb-4">
            Third-Party UI Package (Client)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The `react-slick` carousel shown below is rendered by a Client
            Component (`SlickCarouselWrapper`). This component is imported here
            in the Server Component (`app/page.js`), but its code is only
            executed on the client, as required by the package.
          </p>
          <SlickCarouselWrapper />
        </div>

        {/* context provider discussion */}
        <div className="rounded-lg border border-gray-300 p-6 bg-white dark:bg-gray-800 shadow-sm">
          <h3 className="text-xl font-bold">
            Context Provider (Server-side perspective)
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Server Components cannot directly use React `Context`. Instead, a
            client-side provider wraps the application in the `layout.js`, and
            data needed server-side is passed down via props.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-5">
            The `ThemeToggle` is a client component that needs access to the
            current theme state. Because the `Context` provider is also a client
            component, they can interact seamlessly. From the server's
            perspective, this means the server doesn't manage the theme state;
            it only renders the `ThemeToggle` component, relying on the client
            to handle all interactive theme logic.
          </p>
        </div>
      </section>

      {/* Client Component Patterns Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-500">
          Client Component Patterns
        </h2>

        {/* client-only function example */}
        <div className="rounded-lg border border-gray-300 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 shadow-sm">
          <h3 className="text-xl font-bold">Client-only Code</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The following component uses a function from `utils/client-only.js`.
            That file is marked `"client-only"`, ensuring its only execute in
            the browser.
          </p>
          <ClientInteractive />
        </div>

        {/* client component placement example */}
        <div className="rounded-lg border border-gray-300 p-6 bg-white dark:bg-gray-800 shadow-sm">
          <h3 className="text-xl font-bold">Client Component Placement</h3>
          <p className="text-gray-700 dark:text-gray-300">
            The `ThemeToggle` component is a client component placed at the
            "leaf" of the component tree. This is a best practice to reduce the
            client-side JavaScript bundle size, as the parent layout and page
            remain Server Components.
          </p>
        </div>
      </section>

      {/* Interleaving Server & Client Components Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-500">
          Interleaving Server & Client Components
        </h2>

        <div className="rounded-lg border border-gray-300 p-6 bg-white dark:bg-gray-800 shadow-sm">
          <div>
            <h3 className="text-xl font-bold">
              Server-in-Server and Client-in-Client
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These patterns are the default standard React behaviors.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Server into Server:</strong> This `app/page.js` is a
                Server Component that implicitly renders other Server
                Components. This is standard composition and requires no special
                syntax.
              </li>
              <li>
                <strong>Client into Client:</strong> Once a client boundary is
                defined with `"use client"`, all components imported within that
                tree behave like traditional React, using state, effects, and
                context freely.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold my-3">
              Server Component in a Client Component
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The key pattern for interleaving is passing Server Components as a
              prop (`children`) to a Client Component. The Server Component
              (`ServerDataDisplay`) renders fully on the server, and the Client
              Component (`InteractiveWrapper`) acts purely as an interactive
              wrapper around the static HTML content.
            </p>

            {/* This is where the magic happens: SC passed as child to CC */}
            <InteractiveWrapper>
              <ServerDataDisplay />
            </InteractiveWrapper>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-400 py-8">
        Designed to showcase Next.js server/client composition patterns.
      </footer>
    </main>
  );
}
