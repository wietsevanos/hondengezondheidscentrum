import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoHgc from "@/assets/logo-hgc.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/diensten", label: "Diensten" },
  { to: "/visie", label: "Onze Visie" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-border/60">
      <div className="container-x flex items-center justify-between h-14 lg:h-20">
        <Link to="/" className="flex items-center gap-2 lg:gap-3 group min-w-0">
          <img src={logoHgc.url} alt="Hondengezondheidscentrum logo" className="h-8 lg:h-11 w-auto shrink-0" />
          <span className="hidden sm:inline font-serif text-lg lg:text-2xl text-forest tracking-tight leading-tight truncate">
            Hondengezondheidscentrum
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-forest" }}
              className="text-sm text-walnut hover:text-forest transition-colors relative [&.active]:after:scale-x-100 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-forest after:scale-x-0 after:origin-left after:transition-transform"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-forest text-cream text-sm font-medium hover:bg-olive transition-colors"
          >
            Plan een afspraak
          </Link>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-forest p-1 -mr-1"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-cream">
          <div className="container-x py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-walnut text-base"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-5 py-3 rounded-full bg-forest text-cream text-sm"
            >
              Plan een afspraak
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
