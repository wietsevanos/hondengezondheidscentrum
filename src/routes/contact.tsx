import { createFileRoute } from "@tanstack/react-router";
import storeInteriorAsset from "@/assets/mailen-chews.jpg.asset.json";
const storeInterior = storeInteriorAsset.url;
import { Instagram, MapPin, Mail, Clock, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & winkel, Hondengezondheidscentrum Haarlem" },
      { name: "description", content: "Bezoek ons aan de Ramplaan 48 in Haarlem. Openingstijden, route en contactgegevens van het Hondengezondheidscentrum." },
      { property: "og:title", content: "Bezoek ons aan de Ramplaan in Haarlem" },
      { property: "og:description", content: "Welkom in onze boutique voor hondenwelzijn, Ramplaan 48, Haarlem." },
      { property: "og:image", content: storeInterior },
    ],
  }),
  component: ContactPage,
});

const openingHours = [
  { day: "Maandag", hours: "Gesloten", closed: true },
  { day: "Dinsdag", hours: "09:00 tot 18:00" },
  { day: "Woensdag", hours: "09:00 tot 18:00" },
  { day: "Donderdag", hours: "09:00 tot 18:00" },
  { day: "Vrijdag", hours: "09:00 tot 18:00" },
  { day: "Zaterdag", hours: "09:00 tot 17:00" },
  { day: "Zondag", hours: "Gesloten", closed: true },
];

function ContactPage() {
  return (
    <>
      {/* Intro */}
      <section className="container-x pt-16 lg:pt-24 grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow text-terracotta mb-5">Contact & winkel</p>
          <h1 className="font-serif text-5xl lg:text-7xl text-forest leading-[1.02]">
            Welkom aan de <em className="text-olive">Ramplaan.</em>
          </h1>
        </div>
        <div className="lg:col-span-5">
          <p className="text-walnut/80 text-lg leading-relaxed">
            Loop gerust binnen voor advies, een afspraak voor de trimsalon of
            simpelweg om kennis te maken. Een kop koffie staat klaar, en je hond
            is uiteraard van harte welkom.
          </p>
        </div>
      </section>

      {/* Openingstijden + Map naast elkaar */}
      <section className="container-x mt-16 lg:mt-24 grid lg:grid-cols-12 gap-6 items-stretch">
        {/* Opening hours */}
        <div className="lg:col-span-5 rounded-3xl bg-sand p-8 lg:p-10 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <p className="eyebrow text-olive flex items-center gap-2"><Clock size={14} /> Openingstijden</p>
            <span className="text-[11px] uppercase tracking-[0.18em] text-walnut/60">Winkel</span>
          </div>
          <ul className="divide-y divide-border/60 flex-1">
            {openingHours.map((row) => (
              <li key={row.day} className="flex items-center justify-between py-3 text-[15px]">
                <span className="text-forest font-medium">{row.day}</span>
                <span className={row.closed ? "text-walnut/50 italic" : "text-walnut/85 tabular-nums"}>
                  {row.hours}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-walnut/60 uppercase tracking-widest">Trimsalon op afspraak</p>
        </div>

        {/* Map */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl overflow-hidden border border-border h-[420px] lg:h-full lg:min-h-[520px]">
            <iframe
              title="Locatie Hondengezondheidscentrum"
              src="https://www.google.com/maps?q=Ramplaan+48,+Haarlem&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contactgegevens — clean & minimal */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Adres */}
          <div>
            <p className="eyebrow text-olive mb-4 flex items-center gap-2"><MapPin size={14} /> Adres</p>
            <p className="text-forest text-[17px] leading-relaxed">
              Ramplaan 48<br />
              2015 GW Haarlem
            </p>
            <a
              href="https://www.google.com/maps?q=Ramplaan+48,+Haarlem"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-terracotta hover:underline underline-offset-4"
            >
              Plan je route →
            </a>
          </div>

          {/* Telefoon */}
          <div>
            <p className="eyebrow text-olive mb-4 flex items-center gap-2"><Phone size={14} /> Telefoon</p>
            <a href="tel:0642618286" className="text-forest text-[17px] hover:text-terracotta transition-colors block">
              06 4261 8286
            </a>
            <p className="mt-3 text-sm text-walnut/60 leading-relaxed">Tijdens openingstijden bereikbaar.</p>
          </div>

          {/* E-mail */}
          <div>
            <p className="eyebrow text-olive mb-4 flex items-center gap-2"><Mail size={14} /> E-mail</p>
            <a href="mailto:info@dehoutenhond.nl" className="text-forest text-[17px] hover:text-terracotta transition-colors block break-all">
              info@dehoutenhond.nl
            </a>
          </div>

          {/* Instagram */}
          <div>
            <p className="eyebrow text-olive mb-4 flex items-center gap-2"><Instagram size={14} /> Instagram</p>
            <a
              href="https://www.instagram.com/dehoutenhond/"
              target="_blank"
              rel="noreferrer"
              className="text-forest text-[17px] hover:text-terracotta transition-colors block"
            >
              @dehoutenhond
            </a>
            <a
              href="https://www.instagram.com/bottenbox.nl/"
              target="_blank"
              rel="noreferrer"
              className="text-forest text-[17px] hover:text-terracotta transition-colors block mt-1"
            >
              @bottenbox.nl
            </a>
            <p className="mt-3 text-sm text-walnut/60 leading-relaxed">Verhalen, nieuwe boxen en momenten uit de winkel.</p>
          </div>
        </div>
      </section>

      {/* Closing banner */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="rounded-3xl overflow-hidden relative">
          <img src={storeInterior} alt="Boutique interieur" loading="lazy" width={1920} height={1080}
            className="w-full aspect-[16/7] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/85 via-forest/40 to-transparent" />
          <div className="absolute inset-0 p-8 lg:p-16 flex flex-col justify-center max-w-xl">
            <h2 className="font-serif text-4xl lg:text-5xl text-cream leading-tight">
              Liever even mailen?
            </h2>
            <p className="mt-4 text-cream/85">
              Stel je vraag rustig per mail, we nemen graag de tijd om je goed
              te helpen.
            </p>
            <a href="mailto:info@dehoutenhond.nl" className="mt-8 self-start inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream text-forest text-sm font-medium">
              Stuur ons een bericht
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
