export default function IllustrationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-serif font-semibold">Illustrations</h1>
      <p className="text-sm text-gray-700">
        A gallery of ethically produced artwork informed by cited sources. Each figure includes provenance.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="card h-48 flex items-center justify-center text-gray-400">Artwork #{i}</div>
        ))}
      </div>
    </div>
  );
}
