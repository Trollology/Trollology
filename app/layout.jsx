import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Trollology™ — Where Myth and Imagination Meet",
  description:
    "A visually rich archive of troll species and named figures from folklore and myth.",
  openGraph: {
    title: "Trollology™ — Where Myth and Imagination Meet",
    description:
      "Catalog of troll species & named figures with sources, images, and stories.",
    url: "https://trollology.vercel.app",
    siteName: "Trollology™",
    images: [
      {
        url: "/images/placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Trollology™ — Where Myth and Imagination Meet",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trollology™ — Where Myth and Imagination Meet",
    description: "Scholarly, visual, and story-driven.",
    images: ["/images/placeholder.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 font-sans antialiased">
        {/* ===== HEADER ===== */}
        <header className="border-b border-gray-200 bg-white/80 backdrop-blur sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight font-serif"
            >
              Trollology™
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link className="hover:underline" href="/catalog">
                Catalog
              </Link>
              <Link className="hover:underline" href="/sources">
                Sources
              </Link>
              <Link className="hover:underline" href="/illustrations">
                Illustrations
              </Link>
              <Link className="hover:underline" href="/essays">
                Essays
              </Link>
              <Link className="hover:underline" href="/about">
                About
              </Link>
              <Link className="hover:underline" href="/contribute">
                Contribute
              </Link>
              <Link className="hover:underline" href="/store">
                Store
              </Link>
            </nav>
          </div>
        </header>

        {/* ===== MAIN CONTENT ===== */}
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className="mt-24 border-t border-gray-200 py-10 text-sm text-gray-700">
          <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <p>
                Trollology™ is a research-and-art initiative cataloging trolls
                from public domain sources.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contribute</h3>
              <p>
                Have a troll story or illustration lead?{" "}
                <Link className="underline" href="/contribute">
                  Share it with us
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Note</h3>
              <p>
                We balance myth, history, and storytelling. Detailed 
                 Digital Art images are first-class.
              </p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 mt-6 text-xs">
            © {new Date().getFullYear()} Trollology™
          </div>
        </footer>
      </body>
    </html>
  );
}
