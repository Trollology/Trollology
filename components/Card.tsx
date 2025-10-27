
"use client";
import Link from "next/link";
type Item = { slug: string; name: string; type: "Species" | "Named"; region: string[]; habitat: string[]; synopsis: string; image?: string; earliestSource?: string; };
export function Card({ item }: { item: Item }) {
  return (
    <article className="card h-full flex flex-col">
      <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 mb-4 flex items-center justify-center overflow-hidden">
        {item.image ? ( <img alt={item.name} src={item.image} className="w-full h-full object-cover" /> ) : ( <div className="text-gray-400 text-sm">Illustration coming soon</div> )}
      </div>
      <h3 className="text-lg font-serif font-semibold">{item.name}</h3>
      <div className="mt-1 text-xs text-gray-600">{item.type} • {item.region.join(", ")} • {item.habitat.join(", ")}</div>
      <p className="mt-2 text-sm text-gray-700 line-clamp-3">{item.synopsis}</p>
      <div className="mt-3 text-xs text-gray-500">Earliest source: {item.earliestSource ?? "—"}</div>
      <div className="mt-auto pt-4"><Link className="btn btn-primary" href={`/catalog/${item.slug}`}>View Entry</Link></div>
    </article>
  );
}
