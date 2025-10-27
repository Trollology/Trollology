
'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useMemo } from 'react';
import { trolls } from '../../lib/data';

export default function SearchClient() {
  const params = useSearchParams();
  const q = (params.get('q') || '').toLowerCase();

  const results = useMemo(() => {
    if (!q) return [];
    return trolls.filter((t) => {
      const hay = (
        (t.name || '') +
        ' ' +
        (t.synopsis || '') +
        ' ' +
        (t.region || []).join(' ') +
        ' ' +
        (t.habitat || []).join(' ')
      ).toLowerCase();
      return hay.includes(q);
    });
  }, [q]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-serif font-semibold">Search</h1>
      {q ? (
        <p className="text-sm text-gray-600">
          Results for <strong>{q}</strong>
        </p>
      ) : (
        <p className="text-sm">Type something in the search box on the home page.</p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {results.map((t) => (
          <Link key={t.slug} href={`/catalog/${t.slug}`} className="card block hover:shadow-lg transition">
            <div className="aspect-[16/9] bg-gray-100 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
              <img src={t.image || '/images/placeholder.svg'} alt={t.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <div className="text-xs text-gray-600 mt-1">
              {t.type} · {(t.region || []).join(', ')} · {(t.habitat || []).join(', ')}
            </div>
            <p className="text-sm text-gray-700 mt={2}">{t.synopsis}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
