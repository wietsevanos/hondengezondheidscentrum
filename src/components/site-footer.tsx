import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-cream/90 mt-32">
      <div className="container-x py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <h3 className="font-serif text-3xl text-cream mb-4">Hondengezondheidscentrum</h3>
          <p className="text-cream/70 leading-relaxed text-sm">
            Alles voor de gezondheid, verzorging en het welzijn van jouw hond,
            op één vertrouwde plek in Haarlem.
          </p>
          <a
            href="https://www.instagram.com/dehoutenhond/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm text-cream/80 hover:text-terracotta transition-colors"
          >
            <Instagram size={16} /> @dehoutenhond
          </a>
        </div>
        <div>
          <p className="eyebrow text-sage-soft mb-4">Bezoek ons</p>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Ramplaan 48, Haarlem</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> info@dehoutenhond.nl</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> 023, op afspraak</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-sage-soft mb-4">Navigatie</p>
          <ul className="space-y-3 text-sm text-cream/80">
            <li><Link to="/diensten" className="hover:text-terracotta">Diensten</Link></li>
            <li><Link to="/visie" className="hover:text-terracotta">Onze Visie</Link></li>
            <li><Link to="/reviews" className="hover:text-terracotta">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-terracotta">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Hondengezondheidscentrum Haarlem</p>
          <p>De Houten Hond · Hondentrimsalon Elswout · Bottenbox.nl</p>
        </div>
      </div>
    </footer>
  );
}
