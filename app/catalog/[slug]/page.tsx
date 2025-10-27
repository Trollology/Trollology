
import { notFound } from "next/navigation";
import { trolls } from "@/lib/data";
import { EntrySteps } from "@/components/EntrySteps";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function EntryPage({ params }: { params: { slug: string } }) {
  const entry = trolls.find(t => t.slug === params.slug) as any;
  if (!entry) return notFound();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/catalog", label: "Catalog" }, { label: entry.name }]} />
      <header className="space-y-2">
        <h1 className="text-3xl font-serif font-semibold">{entry.name}</h1>
        <div className="text-sm text-gray-600">{entry.type} • {entry.region.join(", ")} • {entry.habitat.join(", ")}</div>
        <div className="text-xs text-gray-500">Earliest source: {entry.earliestSource ?? "—"}</div>
      </header>
      <EntrySteps entry={entry} />
    </div>
  );
}
