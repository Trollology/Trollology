
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export function SearchBar({ placeholder = "Search…" }: { placeholder?: string }) {
  const [q, setQ] = useState(""); const router = useRouter();
  return (
    <form onSubmit={(e) => { e.preventDefault(); router.push(`/catalog?q=${encodeURIComponent(q)}`); }} className="flex gap-2">
      <input className="input" placeholder={placeholder} value={q} onChange={e => setQ(e.target.value)} />
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
  );
}
