'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { trolls } from "../lib/data";

export default function HomePage() {
  const router = useRouter();
  const [q, setQ] = useState("");

  const featured = useMemo(() => trolls.slice(0, 8), []);

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Trollology</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          A living archive of troll lore — scholarly, visual, and welcoming to curious minds.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); router.push(`/search?q=${encodeURIComponent(q)}`); }}
          className="mt-6 flex items-center justify-center gap-2"
        >
          <input
            className="input w-1/2 min-w-[240px] max-w-xl"
            placeholder="Search trolls, species, sources, regions…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-semibold">Featured Entries</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((t) => (
            <Link key={t.slug} href={`/catalog/${t.slug}`} className="card block hover:shadow-lg transition">
              <div className="aspect-[16/9] bg-gray-100 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="text-xs text-gray-600 mt-1">
                {t.type} · {t.region.join(", ")} · {t.habitat.join(", ")}
              </div>
              <p className="text-sm text-gray-700 mt-2 line-clamp-3">{t.synopsis}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
