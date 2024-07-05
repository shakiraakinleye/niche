import Link from "next/link";

import "./globals.css";

export default function NotFound() {
  return (
    <html lang="en" className="h-full bg-beige-100">
      <body className="h-full font-dmSans">
        <main className="grid min-h-full place-items-center bg-beige-100 px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-semibold text-primary-100">
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-dark-600 sm:text-5xl md:text-6xl 2xl:text-6xxl">
              Page not found
            </h1>
            <p className="mt-6 text:lg sm:text-xl md:text-2xl 2xl:text-3xl leading-7 text-dark-600">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 group">
              <Link
                href="#"
                className="text-sm font-semibold text-dark-600 group-hover:text-primary-100"
              >
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
