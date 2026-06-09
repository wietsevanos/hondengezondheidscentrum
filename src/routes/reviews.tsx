import { Helmet } from "react-helmet-async";
import { Star, Quote } from "lucide-react";

const TOTAL_REVIEWS = 87;

function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

const reviews = [
  { name: "Sanne D.", brand: "De Houten Hond", text: "Eerlijk en deskundig advies. Mijn hond eet voor het eerst écht met plezier, en haar vacht is glanzender dan ooit.", stars: 5 },
  { name: "Mark B.", brand: "Elswout", text: "De beste trimsalon waar we ooit zijn geweest. Onze hond komt rustig binnen en blij weer naar buiten.", stars: 5 },
  { name: "Lotte v.K.", brand: "Bottenbox", text: "De boxen zijn fantastisch, kwaliteit, variatie en mooie verpakking. Een cadeautje voor onze hond én voor ons.", stars: 5 },
  { name: "Pieter J.", brand: "De Houten Hond", text: "Brenda neemt écht de tijd. Geen verkooppraatje, maar oprecht advies waar je iets aan hebt.", stars: 5 },
  { name: "Inge M.", brand: "Elswout", text: "Vakkundig, lief en altijd persoonlijk. Onze pup is hier vanaf dag één op haar gemak.", stars: 4 },
  { name: "Tessa R.", brand: "Bottenbox", text: "Onze hond is dol op de kauwbox. Het bestelproces is soepel en de selectie is iedere keer top.", stars: 5 },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16}
          className={i < count ? "text-terracotta fill-terracotta" : "text-walnut/20"} />
      ))}
    </div>
  );
}

export function ReviewsPage() {
  return (
    <>
      <Helmet>
        <title>Reviews, Hondengezondheidscentrum Haarlem</title>
        <meta name="description" content="Ervaringen van hondeneigenaren met De Houten Hond, Hondentrimsalon Elswout en Bottenbox.nl in Haarlem." />
        <meta property="og:title" content="Wat klanten over ons zeggen" />
        <meta property="og:description" content="Lees authentieke reviews van hondeneigenaren uit Haarlem en omgeving." />
      </Helmet>

      <section className="container-x pt-16 lg:pt-24">
        <p className="eyebrow text-terracotta mb-5">Reviews</p>
        <h1 className="font-serif text-5xl lg:text-7xl text-forest max-w-3xl leading-[1.02]">
          Wat hondeneigenaren <em className="text-olive">over ons zeggen.</em>
        </h1>

        <a href="https://www.google.com/search?q=De+Houten+Hond+Haarlem+reviews"
          target="_blank" rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-4 rounded-2xl bg-card border border-border/70 pl-5 pr-6 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow">
          <GoogleG size={28} />
          <div className="h-8 w-px bg-border" />
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] uppercase tracking-[0.18em] text-walnut/60">Google Reviews</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-serif text-xl text-forest leading-none">4,9</span>
              <StarRow count={5} />
              <span className="text-sm text-walnut/70">({TOTAL_REVIEWS})</span>
            </div>
          </div>
        </a>
      </section>

      <section className="container-x mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <article key={i}
            className={`rounded-3xl p-8 lg:p-10 flex flex-col gap-5 ${
              i % 3 === 0 ? "bg-sage-soft/50" : i % 3 === 1 ? "bg-sand" : "bg-card"
            }`}>
            <div className="flex items-center justify-between">
              <Quote className="text-terracotta" />
              <GoogleG size={18} />
            </div>
            <StarRow count={r.stars} />
            <p className="font-serif text-xl lg:text-2xl text-forest leading-snug italic">"{r.text}"</p>
            <div className="mt-auto pt-6 border-t border-border/60 flex items-center justify-between">
              <div>
                <p className="text-sm text-forest font-medium">{r.name}</p>
                <p className="text-xs text-walnut/70 uppercase tracking-widest mt-1">{r.brand}</p>
              </div>
              <span className="text-[10px] text-walnut/60 uppercase tracking-widest">via Google</span>
            </div>
          </article>
        ))}
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <div className="rounded-3xl bg-forest text-cream p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="bg-cream rounded-full p-3">
              <GoogleG size={28} />
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl">4,9 uit {TOTAL_REVIEWS} reviews</p>
              <p className="text-cream/70 text-sm mt-1">Gemiddelde beoordeling op Google</p>
            </div>
          </div>
          <a href="https://www.google.com/search?q=De+Houten+Hond+Haarlem+reviews"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream text-forest text-sm font-medium">
            <GoogleG size={16} /> Lees alle reviews
          </a>
        </div>
      </section>
    </>
  );
}
