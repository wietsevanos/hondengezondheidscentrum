import { createFileRoute } from "@tanstack/react-router";
import storeInterior from "@/assets/store-interior.jpg";
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
      {/* Intro + map, perfectly aligned */}
      <section className="container-x pt-16 lg:pt-24 grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        <div className="lg:col-span-6 flex flex-col">
          <p className="eyebrow text-terracotta mb-5">Contact & winkel</p>
          <h1 className="font-serif text-5xl lg:text-7xl text-forest leading-[1.02]">
            Welkom aan de <em className="text-olive">Ramplaan.</em>
          </h1>
          <p className="mt-8 text-walnut/80 text-lg leading-relaxed max-w-lg">
            Loop gerust binnen voor advies, een afspraak voor de trimsalon of
            simpelweg om kennis te maken. Een kop koffie staat klaar, en je hond
            is uiteraard van harte welkom.
          </p>

          <div className="mt-auto pt-10">
            <p className="eyebrow text-olive mb-3 flex items-center gap-2"><MapPin size={14} /> Adres</p>
            <p className="font-serif text-3xl lg:text-4xl text-forest leading-snug">
              Ramplaan 48<br />
              <span className="text-walnut/70 text-2xl lg:text-3xl">2015 GW Haarlem</span>
            </p>
            <a
              href="https://www.google.com/maps?q=Ramplaan+48,+Haarlem"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-forest underline underline-offset-4 hover:text-terracotta"
            >
              Plan je route
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-3xl overflow-hidden border border-border h-[420px] lg:h-full lg:min-h-[560px]">
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

      {/* Info grid: opening hours + contact + socials */}
      <section className="container-x mt-20 lg:mt-28 grid lg:grid-cols-12 gap-6">
        {/* Opening hours */}
        <div className="lg:col-span-6 rounded-3xl bg-sand p-8 lg:p-10">
          <div className="flex items-center justify-between mb-6">
            <p className="eyebrow text-olive flex items-center gap-2"><Clock size={14} /> Openingstijden</p>
            <span className="text-[11px] uppercase tracking-[0.18em] text-walnut/60">Winkel</span>
          </div>
          <ul className="divide-y divide-border/60">
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

        {/* Contact + Instagram */}
        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
          <a
            href="tel:0642618286"
            className="rounded-3xl bg-card border border-border/70 p-8 flex flex-col justify-between group hover:border-olive transition-colors"
          >
            <Phone size={20} className="text-olive" />
            <div>
              <p className="eyebrow text-olive mb-2">Telefoon</p>
              <p className="font-serif text-2xl text-forest group-hover:text-terracotta transition-colors">06 4261 8286</p>
            </div>
          </a>

          <a
            href="mailto:info@dehoutenhond.nl"
            className="rounded-3xl bg-card border border-border/70 p-8 flex flex-col justify-between group hover:border-olive transition-colors"
          >
            <Mail size={20} className="text-olive" />
            <div>
              <p className="eyebrow text-olive mb-2">E-mail</p>
              <p className="font-serif text-2xl text-forest group-hover:text-terracotta transition-colors break-all">
                info@dehoutenhond.nl
              </p>
            </div>
          </a>

          <div className="sm:col-span-2 rounded-3xl bg-forest text-cream p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="eyebrow text-sage-soft mb-2 flex items-center gap-2"><Instagram size={14} /> Volg ons</p>
              <p className="font-serif text-2xl">Voor verhalen, nieuwe boxen en momenten uit de winkel.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/dehoutenhond/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-cream/10 hover:bg-cream hover:text-forest text-sm transition-colors"
              >
                @dehoutenhond
              </a>
              <a
                href="https://www.instagram.com/bottenbox.nl/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-cream/10 hover:bg-cream hover:text-forest text-sm transition-colors"
              >
                @bottenbox.nl
              </a>
            </div>
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
