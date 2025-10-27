
"use client";

type SourceRef = { citation?: string; page?: string; quoteOriginal?: string; quoteTranslation?: string; };
type SizeEstimate = { heightRangeM?: [number, number]; weightRangeKg?: [number, number]; methodSummary?: string; methodDetail?: string; };

export type Entry = {
  slug: string; name: string; type: "Species" | "Named"; region: string[]; habitat: string[]; synopsis: string; earliestSource?: string; image?: string;
  scholarlyDescription?: string;
  prologue?: { text: string; evidence: "attested" | "inferred" | "speculative" };
  epilogue?: { text: string; evidence: "attested" | "inferred" | "speculative" };
  size?: SizeEstimate;
  sources?: SourceRef[];
};

export function EntrySteps({ entry }: { entry: Entry }) {
  return (
    <article className="space-y-6">
      <section className="card">
        <h2 className="text-xl font-serif font-semibold">1) Imagery</h2>
        <div className="mt-3 aspect-[16/9] rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
          {entry.image ? ( <img src={entry.image} alt={entry.name} className="w-full h-full object-cover" /> ) : ( <div className="text-gray-400 text-sm">Illustration coming soon</div> )}
        </div>
      </section>

      <section className="card">
        <h2 className="text-xl font-serif font-semibold">Size Estimate</h2>
        <p className="text-sm text-gray-700 mt-2">
          {entry.size?.heightRangeM ? <>Height: {entry.size.heightRangeM[0]}–{entry.size.heightRangeM[1]} m. </> : null}
          {entry.size?.weightRangeKg ? <>Weight: {entry.size.weightRangeKg[0]}–{entry.size.weightRangeKg[1]} kg. </> : null}
        </p>
        {entry.size?.methodSummary && <p className="text-sm text-gray-600 mt-2"><strong>Method:</strong> {entry.size.methodSummary}</p>}
        {entry.size?.methodDetail && <p className="text-xs text-gray-500 mt-1">{entry.size.methodDetail}</p>}
      </section>

      <section className="card"><h2 className="text-xl font-serif font-semibold">3) Scholarly Description</h2><p className="text-sm text-gray-700 mt-2 whitespace-pre-line">{entry.scholarlyDescription ?? "—"}</p></section>

      <section className="card"><h2 className="text-xl font-serif font-semibold">4) Story Synopsis</h2><p className="text-sm text-gray-700 mt-2">{entry.synopsis}</p></section>

      <section className="card"><h2 className="text-xl font-serif font-semibold">5) Prologue (Origin/Backstory)</h2><p className="text-xs text-gray-500">Evidence: {entry.prologue?.evidence ?? "—"}</p><p className="text-sm text-gray-700 mt-2 whitespace-pre-line">{entry.prologue?.text ?? "—"}</p></section>

      <section className="card"><h2 className="text-xl font-serif font-semibold">6) Epilogue (Fate)</h2><p className="text-xs text-gray-500">Evidence: {entry.epilogue?.evidence ?? "—"}</p><p className="text-sm text-gray-700 mt-2 whitespace-pre-line">{entry.epilogue?.text ?? "—"}</p></section>

      <section className="card">
        <h2 className="text-xl font-serif font-semibold">7) Single‑Scene Illustration Brief</h2>
        <ul className="list-disc pl-6 text-sm text-gray-700">
          <li>Setting, time of day, and weather conditions.</li>
          <li>Primary action; include human or animal for scale.</li>
          <li>Key visual motifs (weapons, treasure, architecture).</li>
          <li>Palette and mood notes; respect historical sources.</li>
        </ul>
      </section>

      <section className="card">
        <h2 className="text-xl font-serif font-semibold">Citations & Earliest Sources</h2>
        <ul className="list-disc pl-6 text-sm text-gray-700">
          {entry.sources?.length ? entry.sources.map((s, i) => (<li key={i}><span className="italic">{s.citation}</span>{s.page? `, ${s.page}`: ""}</li>)) : <li>—</li>}
        </ul>
      </section>
    </article>
  );
}
