import { getTrollBySlug } from "../../../lib/data";

export default function TrollPage({ params }) {
  const item = getTrollBySlug(params.slug);
  if (!item) {
    // Next.js will show app/not-found.jsx automatically if we throw notFound,
    // but a simple null check and a message is also fine.
    return <div className="prose"><h1>Not found</h1><p>No such entry.</p></div>;
  }

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-serif font-semibold">{item.name}</h1>
        <div className="text-sm text-gray-600">
          {item.type} · {item.region.join(", ")} · {item.habitat.join(", ")}
        </div>
        <div className="text-xs text-gray-500">Earliest source: {item.early || item.earliestSource || "—"}</div>
      </header>

      <section className="card">
        <h2 className="text-xl font-semibold">1) Imagery</h2>
        <div className="mt-3 aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Size Estimate</h2>
        <p className="text-sm text-gray-700 mt-2">
          {item.size && item.size.height ? <>Height: {item.size.height[0]}–{item.size.height[1]} m. </> : null}
          {item.size && item.size.weight ? <>Weight: {item.size.weight[0]}–{item.size.weight[1]} kg.</> : null}
        </p>
        {item.method && <p className="text-sm text-gray-600 mt-2"><strong>Method:</strong> {item.method}</p>}
        {item.methodDetail && <p className="text-xs text-gray-500 mt-1">{item.methodDetail}</p>}
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">3) Scholarly Description</h2>
        <p className="text-sm text-gray-800 whitespace-pre-line">{item.description}</p>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">4) Story Synopsis</h2>
        <p className="text-sm text-gray-800">{item.synopsis}</p>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">5) Prologue (Origin/Backstory)</h2>
        <p className="text-xs text-gray-500">Evidence: {item.prologue?.evidence || "—"}</p>
        <p className="text-sm text-gray-800 whitespace-pre-line">{item.prologue?.text || "—"}</p>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">6) Epilogue (Fate)</h2>
        <p className="text-xs text-gray-500">Evidence: {item.epilogue?.evidence || "—"}</p>
        <p className="text-sm text-gray-800 whitespace-pre-line">{item.epilogue?.text || "—"}</p>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Citations & Earliest Sources</h2>
        <ul className="list-disc pl-6 text-sm text-gray-800">
          {Array.isArray(item.sources) && item.sources.length > 0 ? (
            item.rollup ? null : item.sources.map((s, i) => <li key={i}>{s}</li>)
          ) : (
            <li>—</li>
          )}
        </ul>
      </section>
    </div>
  );
}
