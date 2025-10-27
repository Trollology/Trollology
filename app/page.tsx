
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import { CatalogGrid } from "@/components/CatalogGrid";
import { trolls } from "@/lib/data";
import { Book, Compass, Images, ScrollText } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Trollology</motion.h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">A scholarly, beautifully illustrated catalog of trolls — grounded in sources published before 1930.</p>
        <div className="mt-6 max-w-2xl mx-auto"><SearchBar placeholder="Search trolls, species, sources, regions…" /></div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link className="btn btn-primary" href="/catalog"><Compass className="w-4 h-4" /> Browse Catalog</Link>
          <Link className="btn btn-ghost" href="/sources"><ScrollText className="w-4 h-4" /> Sources</Link>
          <Link className="btn btn-ghost" href="/illustrations"><Images className="w-4 h-4" /> Illustrations</Link>
          <Link className="btn btn-ghost" href="/essays"><Book className="w-4 h-4" /> Essays</Link>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-semibold">Featured Entries</h2>
        <CatalogGrid items={trolls.slice(0, 8)} />
      </section>
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card"><h3 className="text-xl font-serif font-semibold mb-2">What is Trollology?</h3><p>Trollology catalogs both <strong>Species</strong> types and <strong>Named</strong> individuals, linking them to their earliest attested sources, with translations, scholarly descriptions, and ethically produced illustrations.</p></div>
        <div className="card"><h3 className="text-xl font-serif font-semibold mb-2">Contribute</h3><p>Have a source or correction? <a href="/contribute">Send it</a>. Help us grow the archive.</p></div>
      </section>
    </div>
  );
}
