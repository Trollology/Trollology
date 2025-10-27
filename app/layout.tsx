
import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Trollology — Scholarly Troll Catalog",
  description: "An authoritative, beautifully illustrated catalog of trolls with pre‑1930 sources, scholarship, and artwork.",
  openGraph: { title: "Trollology — Scholarly Troll Catalog", description: "Catalog of troll species & named trolls with citations, maps, and art.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Nav />
        <main className="container py-8">{children}</main>
        <footer className="container py-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div><h3 className="font-semibold mb-2">About</h3><p>Trollology is a research-and-art initiative cataloging trolls from pre‑1930 sources.</p></div>
            <div><h3 className="font-semibold mb-2">Contribute</h3><p>Found a source? <a href="/contribute">Submit it</a>.</p></div>
            <div><h3 className="font-semibold mb-2">Notes</h3><p>Content is scholarly and family‑friendly. Accessibility and citations are first‑class.</p></div>
          </div>
          <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Trollology</div>
        </footer>
      </body>
    </html>
  );
}
