import { Suspense } from 'react';
import SearchClient from './SearchClient';

// Tell Next.js not to pre-render this route at build time.
// It will be rendered on demand so useSearchParams() is safe.
export const dynamic = 'force-dynamic';

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-sm text-gray-600">Loading search…</div>}>
      <SearchClient />
    </Suspense>
  );
}

