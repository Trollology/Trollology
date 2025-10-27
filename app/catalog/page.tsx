
"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { trolls, regions, habitats, speciesTypes } from "@/lib/data";
import { CatalogGrid } from "@/components/CatalogGrid";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function CatalogPage() {
  const params = useSearchParams();
  const q = params.get("q")?.toLowerCase() ?? "";
  const [regionSel, setRegionSel] = useState<string[]>([]);
  const [habitatSel, setHabitatSel] = useState<string[]>([]);
  const [typeSel, setTypeSel] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return trolls.filter(t => {
      const matchesQ = !q || [t.name, t.synopsis, ...(t.region||[]), ...(t.habitat||[])].join(" ").toLowerCase().includes(q);
      const matchesRegion = regionSel.length === 0 || t.region.some((r: string) => regionSel.includes(r));
      const matchesHabitat = habitatSel.length === 0 || t.habitat.some((h: string) => habitatSel.includes(h));
      const matchesType = typeSel.length === 0 || typeSel.includes(t.type);
      return matchesQ && matchesRegion && matchesHabitat && matchesType;
    });
  }, [q, regionSel, habitatSel, typeSel]);

  const Facet = ({title, options, values, onToggle}:{title:string; options:string[]; values:string[]; onToggle:(v:string)=>void}) => (
    <div className="card">
      <h4 className="font-semibold mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(o => {
          const active = values.includes(o);
          return <button key={o} className={active ? "badge bg-indigo-600 text-white" : "badge"} onClick={()=>onToggle(o)}>{o}</button>
        })}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <Breadcrumbs items={[{href:'/', label:'Home'}, {label:'Catalog'}]} />
      <div className="grid md:grid-cols-[260px,1fr] gap-6">
        <aside className="space-y-4">
          <Facet title="Type" options={speciesTypes} values={typeSel} onToggle={(v)=>setTypeSel(s=>s.includes(v)? s.filter(x=>x!==v): [...s,v])} />
          <Facet title="Region" options={regions} values={regionSel} onToggle={(v)=>setRegionSel(s=>s.includes(v)? s.filter(x=>x!==v): [...s,v])} />
          <Facet title="Habitat" options={habitats} values={habitatSel} onToggle={(v)=>setHabitatSel(s=>s.includes(v)? s.filter(x=>x!==v): [...s,v])} />
        </aside>
        <section className="space-y-4">
          <h1 className="text-2xl font-serif font-semibold">Catalog</h1>
          <CatalogGrid items={filtered} />
        </section>
      </div>
    </div>
  );
}
