'use client';
import { useState, useMemo } from "react";
import Link from "next/link";
import { trolls, regions, habitats, types } from "../../lib/data";

export default function CatalogPage() {
  const [selTypes, setSelTypes] = useState([]);
  const [selRegions, setSelRegions] = useState([]);
  const [selHabitats, setSelHabitats] = useState([]);
  const [q, setQ] = useState("");

  const toggle = (arr, v) => (arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]);

  const filtered = useMemo(() => {
    const regLower = selRegions.map(s => s.toLowerCase());
    const habLower = selHabitats.map(s => s.toLowerCase());
    return trolls.filter(t => {
      const text = (t.name + " " + t.synopsis).toString().toLowerCase();
      const qOk = !q || text.includes(q.toLowerCase());
      const typeOk = selTypes.length === 0 || selTypes.includes(t.type);
      const regOk  = selRegions.length === 0 || t.region.some(r => regLower.includes(r.toLowerCase()));
      const habOk  = selHabitats.length === 0 || t.habitat.some(h => habLower.includes(h.toLowerCase()));
      return qOk && typeOk && regOk && habOk;
    });
  }, [q, selTypes, selRegions, selHabitats]);

  return (
    <div className="grid md:grid-cols-[260px,1fr] gap-6">
      <aside className="space-y-6">
        <div className="card">
          <h3 className="font-semibold mb-2">Search</h3>
          <input className="input" placeholder="Search…" value={q} onChange={(e)=>setQ(e.target.value)} />
        </div>

        <div className="card">
          <h3 className="font-semibold mb-2">Type</h3>
          <div className="flex flex-wrap gap-2">
            {types.map(t => (
              <button key={t} className={selTypes.includes(t)? "badge bg-indigo-600 text-white" : "badge"} onClick={()=>setTimeout(()=>setSelTypes(s=>toggle(s,t)),0)}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-2">Region</h3>
          <div className="flex flex-wrap gap-2">
            {regions.map(r => (
              <button key={r} className={selRegions.includes(r)? "badge bg-indigo-600 text-white" : "badge"} onClick={()=>setSelRegions(s=>toggle(s,r))}>
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-2">Habitat</h3>
          <div className="flex flex-wrap gap-2">
            {habitats.map(h => (
              <button key={h} className={selHabitats.includes(h)? "badge bg-indigo-600 text-white" : "badge"} onClick={()=>setSelHabitats(s=>toggle(s,h))}>
                {h}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <section className="space-y-4">
        <h1 className="text-2xl font-serif font-semibold">Catalog</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(t => (
            <Link key={t.slug} href={`/catalog/${t.slug}`} className="card block hover:shadow-lg transition">
              <div className="aspect-[16/9] bg-gray-100 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="text-xs text-gray-600 mt-1">{t.type} · {t.region.join(", ")} · {t.habitat.join(", ")}</div>
              <p className="text-sm text-gray-700 mt-2 line-clamp-3">{t.synopsis}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
