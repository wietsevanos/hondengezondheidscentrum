import { createFileRoute } from "@tanstack/react-router";
import storeInterior from "@/assets/store-interior.jpg";
import { Instagram, MapPin, Mail, Clock } from "lucide-react";

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

function ContactPage() {
  return (
    <>
      <section className="container-x pt-16 lg:pt-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <p className="eyebrow text-terracotta mb-5">Contact & winkel</p>
          <h1 className="font-serif text-5xl lg:text-7xl text-forest leading-[1.02]">
            Welkom aan de <em className="text-olive">Ramplaan.</em>
          </h1>
          <p className="mt-8 text-walnut/80 text-lg leading-relaxed max-w-lg">
            Loop gerust binnen voor advies, een afspraak voor de trimsalon of
            simpelweg om kennis te maken. Een kop koffie staat klaar, en je hond
            is uiteraard van harte welkom.
          </p>

          <dl className="mt-12 grid sm:grid-cols-2 gap-8">
            <div>
              <dt className="flex items-center gap-2 eyebrow text-olive mb-2"><MapPin size={14} /> Adres</dt>
              <dd className="font-serif text-2xl text-forest leading-snug">Ramplaan 48<br />2015 GW Haarlem</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 eyebrow text-olive mb-2"><Clock size={14} /> Openingstijden</dt>
              <dd className="text-walnut/85 leading-relaxed text-sm">
                Di, Vr · 09:30, 18:00<br />
                Zaterdag · 09:30, 17:00<br />
                Trimsalon op afspraak
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 eyebrow text-olive mb-2"><Mail size={14} /> E-mail</dt>
              <dd><a href="mailto:info@dehoutenhond.nl" className="text-forest underline underline-offset-4">info@dehoutenhond.nl</a></dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 eyebrow text-olive mb-2"><Instagram size={14} /> Instagram</dt>
              <dd><a href="https://www.instagram.com/dehoutenhond/" target="_blank" rel="noreferrer" className="text-forest underline underline-offset-4">@dehoutenhond</a></dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-3xl overflow-hidden border border-border h-[420px] lg:h-[560px]">
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

      <section className="container-x mt-24">
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
