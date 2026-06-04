import { createFileRoute } from "@tanstack/react-router";
import naturalFood from "@/assets/natural-food.jpg";
import grooming from "@/assets/grooming.jpg";
import bottenbox from "@/assets/bottenbox.jpg";
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
    img: naturalFood,
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
    img: bottenbox,
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

      <section className="container-x mt-16 space-y-10">
        {services.map((s, i) => (
          <article
            key={s.title}
            className={`grid lg:grid-cols-12 gap-8 items-center rounded-3xl overflow-hidden bg-card ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="lg:col-span-6 relative">
              <img src={s.img} alt={s.title} loading="lazy" width={1080} height={1600}
                className="w-full aspect-[5/4] object-cover" />
              <span className={`absolute top-5 left-5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] text-cream ${s.accent}`}>
                {s.eyebrow}
              </span>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 p-8 lg:p-12">
              <h2 className="font-serif text-4xl lg:text-5xl text-forest leading-tight">{s.title}</h2>
              <ul className="mt-8 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-walnut">
                    <Check size={18} className="mt-0.5 text-olive shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href={s.link} target="_blank" rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-forest text-cream text-sm hover:bg-olive transition-colors">
                Bezoek de website <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
