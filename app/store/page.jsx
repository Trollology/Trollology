export default function StorePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-serif font-semibold">Store</h1>
      <p className="text-sm text-gray-700">
        Support the project with prints and books. (Integrate Shopify Lite or Snipcart here later.)
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { id: "print-dovre", name: "Dovregubben — Art Print", price: 24 },
          { id: "book-vol1", name: "Trollology Vol. 1 — Research & Catalog", price: 38 },
          { id: "postcards", name: "Troll Postcards (Set of 6)", price: 12 }
        ].map(p => (
          <div key={p.id} className="card">
            <div className="h-32 bg-gray-100 rounded-xl mb-3 flex items-center justify-center text-gray-400">
              {p.name}
            </div>
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-gray-600 mt-1">${p.price} CAD</div>
          </div>
        ))}
      </div>
    </div>
  );
}
