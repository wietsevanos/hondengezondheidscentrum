import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Check } from "lucide-react";

import houtenHond from "@/assets/houten-hond-storefront.jpg";
import grooming from "@/assets/elswout-dog.jpg";
import bottenbox from "@/assets/bottenbox-chews-display.jpg";
import voedingsadvies from "@/assets/voedingsadvies-brenda.jpg";
import storeInterior from "@/assets/store-interior.jpg";

const services = [
  {
    eyebrow: "01, De Houten Hond",
    title: "Natuurlijke voeding & supplementen",
    img: houtenHond,
    accent: "bg-olive",
    bullets: [
      "Eerlijke, natuurlijke samenstellingen",
      "Persoonlijk voedingsadvies",
      "Supplementen op maat",
      "Premium snacks en wellness",
    ],
    isNew: false,
    link: "https://www.dehoutenhond.nl/",
  },
  {
    eyebrow: "02, Hondentrimsalon Elswout",
    title: "Trimsalon voor huid & vacht",
    img: grooming,
    accent: "bg-sage",
    bullets: [
      "Gericht op gezonde huid en vacht",
      "Persoonlijke benadering per ras",
      "Natuurlijke verzorgingsproducten",
      "Op afspraak, rustige omgeving",
    ],
    isNew: false,
    link: "https://www.elswouthondentrimsalon.nl/",
  },
  {
    eyebrow: "03, Bottenbox",
    title: "Natuurlijke kauwproducten",
    img: bottenbox,
    accent: "bg-terracotta",
    bullets: [
      "Zorgvuldig samengestelde boxen",
      "Natuurlijke, langdurige kauw",
      "Geschikt voor elk formaat hond",
      "Bezorgd of opgehaald in Haarlem",
    ],
    isNew: false,
    link: "https://bottenbox.nl/",
  },
  {
    eyebrow: "04, Hondenvoedingsadviseur",
    title: "Persoonlijk voedingsadvies",
    img: voedingsadvies,
    accent: "bg-forest",
    isNew: true,
    bullets: [
      "Hulp bij het vinden van passende voeding",
      "Afgestemd op leeftijd, ras en gezondheid",
      "Onafhankelijk en eerlijk advies",
      "In de winkel of op afspraak",
    ],
    link: "/contact",
  },
];

export function DienstenPage() {
  return (
    <>
      <Helmet>
        <title>Diensten, Hondengezondheidscentrum Haarlem</title>
        <meta name="description" content="Natuurlijke voeding, persoonlijk voedingsadvies, professionele trimsalon en kauwboxen, alle diensten van het Hondengezondheidscentrum." />
        <meta property="og:title" content="Onze diensten, Hondengezondheidscentrum" />
        <meta property="og:description" content="Vier disciplines, één toewijding aan hondenwelzijn in Haarlem." />
        <meta property="og:image" content={storeInterior} />
      </Helmet>

      <section className="container-x pt-16 lg:pt-24 pb-10 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow text-terracotta mb-5">Onze diensten</p>
          <h1 className="font-serif text-5xl lg:text-7xl text-forest leading-[1.02]">
            Alles voor jouw hond, <em className="text-olive">onder één dak.</em>
          </h1>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="text-walnut/80 leading-relaxed">
            Of het nu om voeding, voedingsadvies, vachtverzorging of kauwplezier
            gaat, wij denken mee. Vier disciplines, met elkaar verbonden, zodat
            jouw hond altijd de juiste zorg krijgt.
          </p>
        </div>
      </section>

      <section className="container-x mt-16 space-y-12 lg:space-y-16">
        {services.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <article
              key={s.title}
              className="group grid lg:grid-cols-12 gap-0 items-stretch rounded-2xl overflow-hidden bg-card border border-walnut/15 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] transition-shadow duration-700"
            >
              <div className={`lg:col-span-7 relative overflow-hidden ${reversed ? "lg:order-2" : ""}`}>
                <img src={s.img} alt={s.title} loading="lazy" width={1280} height={800}
                  className="w-full h-full aspect-[4/3] lg:aspect-[16/10] object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]" />
                <span className={`absolute top-4 left-4 sm:top-5 sm:left-5 max-w-[calc(100%-6.5rem)] truncate px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-cream ${s.accent}`}>
                  {s.eyebrow}
                </span>
                {s.isNew && (
                  <span className="absolute top-4 right-4 sm:top-5 sm:right-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream/95 text-forest text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                    <span className="size-1.5 rounded-full bg-terracotta" /> Nieuw
                  </span>
                )}
              </div>
              <div className={`lg:col-span-5 flex flex-col justify-between p-7 lg:p-10 ${reversed ? "lg:order-1" : ""}`}>
                <div>
                  <h2 className="font-serif text-2xl lg:text-[1.9rem] text-forest leading-[1.15] tracking-tight">
                    {s.title}
                  </h2>
                  <div className="mt-4 h-px w-10 bg-walnut/25" />
                  <ul className="mt-5 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-walnut/85 text-[14px] leading-snug">
                        <Check size={15} className="mt-0.5 text-olive shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={s.link}
                  {...(s.link.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="mt-6 inline-flex items-center justify-between gap-3 text-forest text-xs uppercase tracking-[0.18em] border-b border-forest/30 pb-2 w-full hover:border-forest transition-colors">
                  <span>{s.link.startsWith("http") ? "Bezoek de website" : "Plan een afspraak"}</span>
                  <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
