
"use client";
import { Card } from "@/components/Card";
export function CatalogGrid({ items }: { items: any[] }) { return (<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">{items.map(it => <Card key={it.slug} item={it} />)}</div>); }
