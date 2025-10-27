
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" }, { href: "/catalog", label: "Catalog" }, { href: "/sources", label: "Sources" },
  { href: "/illustrations", label: "Illustrations" }, { href: "/essays", label: "Essays" }, { href: "/about", label: "About" },
  { href: "/contribute", label: "Contribute" }, { href: "/store", label: "Store" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight">Trollology</Link>
        <nav className="hidden md:flex items-center gap-5">
          {links.map(l => (<Link key={l.href} href={l.href} className={clsx("hover:underline underline-offset-4", pathname === l.href && "font-semibold")}>{l.label}</Link>))}
        </nav>
        <button className="md:hidden btn btn-ghost" onClick={() => setOpen(v => !v)} aria-label="Open menu"><Menu className="w-5 h-5" /></button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="container py-2 flex flex-col gap-2">
            {links.map(l => (<Link key={l.href} href={l.href} className="py-1" onClick={() => setOpen(false)}>{l.label}</Link>))}
          </div>
        </div>
      )}
    </header>
  );
}
