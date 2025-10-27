export default function SourcesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-serif font-semibold">Sources</h1>
      <p className="text-sm text-gray-700">
        Explore canonical editions and scans of public‑domain sources (e.g., HathiTrust, Internet Archive).
      </p>
      <ul className="list-disc pl-6 text-sm">
        <li><strong>Poetic Edda</strong> — Old Norse poems; various translations.</li>
        <li><strong>Asbjørnsen & Moe</strong> — Norske Folkeeventyr.</li>
        <li><strong>Prose Edda</strong> — Snorri Sturluson.</li>
      </ul>
    </div>
  );
}
