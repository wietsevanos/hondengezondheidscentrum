import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoHgc from "@/assets/logo-hgc.png";

const nav = [
  { to: "/", label: "Home", end: true },
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
          <span
            aria-label="Hondengezondheidscentrum logo"
            role="img"
            className="block h-8 lg:h-11 aspect-[526/686] shrink-0 bg-forest"
            style={{
              WebkitMaskImage: `url(${logoHgc})`,
              maskImage: `url(${logoHgc})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
          <span className="hidden sm:inline font-serif text-lg lg:text-2xl text-forest tracking-tight leading-tight truncate">
            Hondengezondheidscentrum
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `text-sm transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-forest after:origin-left after:transition-transform ${
                  isActive ? "text-forest after:scale-x-100" : "text-walnut hover:text-forest after:scale-x-0"
                }`
              }
            >
              {n.label}
            </NavLink>
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
