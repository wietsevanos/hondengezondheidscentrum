import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";
import logoHgc from "@/assets/logo-hgc.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-cream/90 mt-20 lg:mt-32">
      <div className="container-x py-10 lg:py-20 grid gap-8 md:gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-3 mb-3 lg:mb-4">
            <img src={logoHgc.url} alt="" className="h-9 lg:h-12 w-auto bg-cream rounded-md p-1.5 shrink-0" />
            <h3 className="font-serif text-xl lg:text-3xl text-cream leading-tight">Hondengezondheidscentrum</h3>
          </div>
          <p className="text-cream/70 leading-relaxed text-sm">
            Alles voor de gezondheid, verzorging en het welzijn van jouw hond,
            op één vertrouwde plek in Haarlem.
          </p>
          <div className="flex flex-col gap-2 mt-6 text-sm">
            <a href="https://www.instagram.com/dehoutenhond/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-terracotta transition-colors">
              <Instagram size={16} /> @dehoutenhond
            </a>
            <a href="https://www.instagram.com/bottenbox.nl/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-terracotta transition-colors">
              <Instagram size={16} /> @bottenbox.nl
            </a>
          </div>
        </div>
        <div>
          <p className="eyebrow text-sage-soft mb-4">Bezoek ons</p>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Ramplaan 48, Haarlem</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" /><span>info@dehoutenhond.nl</span></li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> <a href="tel:0642618286" className="hover:text-terracotta">06 4261 8286</a></li>
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
          <p>De Houten Hond · Hondentrimsalon Elswout · Bottenbox.nl · Hondenvoedingsadviseur</p>
        </div>
      </div>
    </footer>
  );
}
