import { createFileRoute } from "@tanstack/react-router";
import houtenHond from "@/assets/houten-hond-storefront.jpg.asset.json";
import grooming from "@/assets/grooming.jpg";
import bottenbox from "@/assets/bottenbox-chews.jpg.asset.json";
import storeInterior from "@/assets/store-interior.jpg";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/diensten")({
  head: () => ({
    meta: [
      { title: "Diensten, Hondengezondheidscentrum Haarlem" },
      { name: "description", content: "Natuurlijke voeding, professionele trimsalon en kauwboxen, alle diensten van het Hondengezondheidscentrum." },
      { property: "og:title", content: "Onze diensten, Hondengezondheidscentrum" },
      { property: "og:description", content: "Drie disciplines, één toewijding aan hondenwelzijn in Haarlem." },
      { property: "og:image", content: storeInterior },
    ],
  }),
  component: DienstenPage,
});

const services = [
  {
    eyebrow: "01, De Houten Hond",
    title: "Natuurlijke voeding & supplementen",
    img: houtenHond.url,
    accent: "bg-olive",
    bullets: [
      "Eerlijke, natuurlijke samenstellingen",
      "Persoonlijk voedingsadvies",
      "Supplementen op maat",
      "Premium snacks en wellness",
    ],
    link: "https://www.dehoutenhond.nl/",
  },
  {
    eyebrow: "02, Elswout",
    title: "Trimsalon voor huid & vacht",
    img: grooming,
    accent: "bg-sage",
    bullets: [
      "Gericht op gezonde huid en vacht",
      "Persoonlijke benadering per ras",
      "Natuurlijke verzorgingsproducten",
      "Op afspraak, rustige omgeving",
    ],
    link: "https://www.elswouthondentrimsalon.nl/",
  },
  {
    eyebrow: "03, Bottenbox",
    title: "Natuurlijke kauwproducten",
    img: bottenbox.url,
    accent: "bg-terracotta",
    bullets: [
      "Zorgvuldig samengestelde boxen",
      "Natuurlijke, langdurige kauw",
      "Geschikt voor elk formaat hond",
      "Bezorgd of opgehaald in Haarlem",
    ],
    link: "https://bottenbox.nl/",
  },
];

function DienstenPage() {
  return (
    <>
      <section className="container-x pt-16 lg:pt-24 pb-10 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow text-terracotta mb-5">Onze diensten</p>
          <h1 className="font-serif text-5xl lg:text-7xl text-forest leading-[1.02]">
            Alles voor jouw hond, <em className="text-olive">onder één dak.</em>
          </h1>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="text-walnut/80 leading-relaxed">
            Of het nu om voeding, vachtverzorging of kauwplezier gaat, wij denken
            mee. Elke discipline is verbonden met de andere, zodat jouw hond altijd
            de juiste zorg krijgt.
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
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full aspect-[4/3] lg:aspect-[16/10] object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                />
                <span className={`absolute top-5 left-5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.22em] text-cream ${s.accent}`}>
                  {s.eyebrow}
                </span>
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
                <a
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-between gap-3 text-forest text-xs uppercase tracking-[0.18em] border-b border-forest/30 pb-2 w-full hover:border-forest transition-colors"
                >
                  <span>Bezoek de website</span>
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
