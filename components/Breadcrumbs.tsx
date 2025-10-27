
"use client";
import Link from "next/link";

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav className="text-sm text-gray-600 mb-4">
      {items.map((it, idx) => (
        <span key={idx}>
          {it.href ? <Link className="hover:underline" href={it.href}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
          {idx < items.length - 1 && <span className="mx-2 text-gray-400">/</span>}
        </span>
      ))}
    </nav>
  );
}
