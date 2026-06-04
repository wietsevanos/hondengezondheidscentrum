import { createFileRoute, Link } from "@tanstack/react-router";
import heroDogAsset from "@/assets/hero-puppy-box.png.asset.json";
import naturalFoodAsset from "@/assets/natural-chews.jpg.asset.json";
import houtenHondAsset from "@/assets/houten-hond.jpg.asset.json";
import bottenboxLogoAsset from "@/assets/bottenbox-logo.svg.asset.json";
import grooming from "@/assets/grooming.jpg";
import bottenboxAsset from "@/assets/bottenbox-poster.jpg.asset.json";
import brendaAsset from "@/assets/brenda-portrait.jpg.asset.json";
import storeInteriorAsset from "@/assets/store-brenda-dogs.jpg.asset.json";
import lifestyleWalkAsset from "@/assets/lifestyle-treat.jpg.asset.json";
import bottenboxGiant from "@/assets/bottenbox-giant.jpg.asset.json";
import bottenboxClassic from "@/assets/bottenbox-classic.jpg.asset.json";
import bottenboxMini from "@/assets/bottenbox-mini.jpg.asset.json";
import bottenboxPuppy from "@/assets/bottenbox-puppy.jpg.asset.json";
const heroDog = heroDogAsset.url;
const naturalFood = naturalFoodAsset.url;
const houtenHond = houtenHondAsset.url;
const bottenboxLogo = bottenboxLogoAsset.url;
const bottenbox = bottenboxAsset.url;
const brenda = brendaAsset.url;
const storeInterior = storeInteriorAsset.url;
const lifestyleWalk = lifestyleWalkAsset.url;
import { ArrowUpRight, Leaf, HeartPulse, Sparkles, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hondengezondheidscentrum, Premium hondenwelzijn in Haarlem" },
      { name: "description", content: "Natuurlijke voeding, professionele trimsalon en zorgvuldig samengestelde kauwboxen. Eén ecosysteem voor de gezondheid van jouw hond." },
      { property: "og:title", content: "Hondengezondheidscentrum Haarlem" },
      { property: "og:description", content: "Premium ecosysteem voor hondenwelzijn aan de Ramplaan in Haarlem." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-6 lg:pt-10">
        <div className="relative rounded-3xl overflow-hidden bg-forest">
          <img
            src={heroDog}
            alt="Gelukkige hond in de boutique van het Hondengezondheidscentrum Haarlem"
            width={1920}
            height={1080}
            className="w-full h-[70vh] min-h-[520px] max-h-[760px] object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-forest/80 via-forest/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 lg:p-16">
            <p className="eyebrow text-sage-soft mb-4 fade-up">Haarlem · sinds jaren toegewijd</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-cream max-w-5xl fade-up">
              Wellness voor <em className="text-sage-soft">elke hond.</em>
            </h1>
            <p className="mt-6 max-w-xl text-cream/85 text-lg leading-relaxed fade-up">
              Natuurlijke voeding, deskundige verzorging en zorgvuldig geselecteerde producten ,
              verenigd in één premium ecosysteem voor hondenwelzijn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 fade-up">
              <Link to="/diensten" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream text-forest text-sm font-medium hover:bg-sand transition-colors">
                Bekijk onze diensten <ArrowUpRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-cream/40 text-cream text-sm hover:bg-cream/10 transition-colors">
                Plan een afspraak
              </Link>
              <Link to="/visie" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-cream/40 text-cream text-sm hover:bg-cream/10 transition-colors">
                Ontdek onze visie
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="container-x mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-y border-border py-10">
          {[
            { kpi: "4.9", label: "Google Reviews", Icon: Star },
            { kpi: "Pers.", label: "Persoonlijk advies", Icon: HeartPulse },
            { kpi: "Nat.", label: "Natuurlijk & deskundig", Icon: Leaf },
            { kpi: "1+1", label: "Alles onder één dak", Icon: Sparkles },
          ].map(({ kpi, label, Icon }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-sage-soft/40 text-forest flex items-center justify-center font-serif">
                <Icon size={20} />
              </div>
              <div>
                <p className="font-serif text-xl text-forest leading-none">{kpi}</p>
                <p className="text-[11px] tracking-[0.18em] uppercase text-walnut/70 mt-1">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro editorial */}
      <section className="container-x mt-32 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-5">
          <p className="eyebrow text-terracotta mb-5">Eén ecosysteem</p>
          <h2 className="font-serif text-5xl lg:text-6xl text-forest leading-[1.05]">
            Drie disciplines.<br />
            <em className="text-olive">Eén toewijding</em> aan jouw hond.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-lg text-walnut/80 leading-relaxed">
            Onder één dak vind je natuurlijke voeding, een deskundige trimsalon en
            zorgvuldig samengestelde kauwboxen. Geen losse winkels, maar een
            doorlopende zorg voor de gezondheid, vacht en het welzijn van je hond,
            opgebouwd uit jarenlange ervaring en oprechte aandacht.
          </p>
        </div>
      </section>

      {/* THE THREE BRANDS, asymmetric editorial */}
      <section className="container-x mt-20">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Card 1, large left */}
          <a
            href="https://www.dehoutenhond.nl/"
            target="_blank" rel="noreferrer"
            className="group lg:col-span-7 lg:row-span-2 relative rounded-3xl overflow-hidden bg-olive min-h-[520px]"
          >
            <img src={houtenHond} alt="De Houten Hond, houten wolfsculptuur" loading="lazy" width={1080} height={1600}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />
            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between">
              <p className="eyebrow text-sage-soft">01, Voeding & wellness</p>
              <div>
                <h3 className="font-serif text-4xl lg:text-6xl text-cream leading-tight">De Houten Hond</h3>
                <p className="mt-4 max-w-md text-cream/85">
                  Natuurlijke hondenvoeding, supplementen en wellness producten met
                  een eerlijke samenstelling, geselecteerd door experts.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-cream text-sm">
                  Bezoek dehoutenhond.nl <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </div>
          </a>

          {/* Card 2, top right */}
          <a
            href="https://www.elswouthondentrimsalon.nl/"
            target="_blank" rel="noreferrer"
            className="group lg:col-span-5 relative rounded-3xl overflow-hidden bg-sand min-h-[250px]"
          >
            <img src={grooming} alt="Hondentrimsalon Elswout" loading="lazy" width={1080} height={1600}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-walnut/85 via-walnut/30 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <p className="eyebrow text-cream/80">02, Trimsalon</p>
              <h3 className="font-serif text-3xl lg:text-4xl text-cream mt-2">Hondentrimsalon Elswout</h3>
              <span className="mt-3 inline-flex items-center gap-2 text-cream/90 text-sm">
                Vacht- & huidverzorging <ArrowUpRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </a>

          {/* Card 3, bottom right */}
          <a
            href="https://bottenbox.nl/"
            target="_blank" rel="noreferrer"
            className="group lg:col-span-5 relative rounded-3xl overflow-hidden bg-terracotta/90 min-h-[250px]"
          >
            <img src={bottenbox} alt="Bottenbox kauwproducten" loading="lazy" width={1080} height={1600}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-walnut/85 via-walnut/30 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <p className="eyebrow text-cream/80">03, Natuurlijke kauw</p>
              <h3 className="font-serif text-3xl lg:text-4xl text-cream mt-2">Bottenbox.nl</h3>
              <span className="mt-3 inline-flex items-center gap-2 text-cream/90 text-sm">
                Kauwproducten & boxen <ArrowUpRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* BOTTENBOX COLLECTION */}
      <section className="container-x mt-32">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-terracotta mb-5">De Bottenbox collectie</p>
            <h2 className="font-serif text-5xl lg:text-6xl text-forest leading-[1.05]">
              Vier boxen, <em className="text-olive">één filosofie.</em>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-walnut/80 leading-relaxed">
              Elke Bottenbox is met zorg samengesteld rond de grootte en de
              levensfase van jouw hond. Natuurlijke kauwbotten en eerlijke
              snacks, in vier varianten.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { img: bottenboxPuppy.url, name: "Bottenbox Puppy", tag: "Voor jonge honden", desc: "Zachte kauwbotten en puppy vriendelijke snacks, perfect voor melktandjes.", bg: "bg-[#b88a3e]", text: "text-cream" },
            { img: bottenboxMini.url, name: "Bottenbox Mini", tag: "Voor kleine honden", desc: "Zorgvuldig op maat voor kleine kaakjes met veel variatie voor urenlang kauwplezier.", bg: "bg-[#a8b88a]", text: "text-forest" },
            { img: bottenboxClassic.url, name: "Bottenbox Classic", tag: "Voor middelgrote honden", desc: "Een uitgebalanceerde mix van natuurlijke kauwbotten en gezonde snacks.", bg: "bg-[#c89b8a]", text: "text-cream" },
            { img: bottenboxGiant.url, name: "Bottenbox Giant", tag: "Voor grote honden", desc: "Extra grote porties, stevige kauwbotten en robuuste snacks voor krachtige kaken.", bg: "bg-[#6b4a32]", text: "text-cream" },
          ].map((b) => (
            <article key={b.name} className={`group rounded-3xl overflow-hidden ${b.bg} ${b.text} flex flex-col`}>
              <div className="p-4">
                <div className="overflow-hidden rounded-2xl bg-black/5 aspect-square">
                  <img
                    src={b.img}
                    alt={b.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-out"
                  />
                </div>
              </div>
              <div className="px-6 pb-7 pt-2 flex flex-col flex-1">
                <p className="text-[10px] tracking-[0.22em] uppercase opacity-80">{b.tag}</p>
                <h3 className="font-serif text-2xl lg:text-[1.7rem] mt-2 leading-tight">{b.name}</h3>
                <p className="mt-3 text-sm opacity-85 leading-relaxed flex-1">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://bottenbox.nl/"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest text-cream text-sm hover:bg-forest/90 transition-colors"
          >
            Ontdek alle boxen op bottenbox.nl <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* PHILOSOPHY, sage colored band */}
      <section className="mt-32 bg-sage-soft/50">

        <div className="container-x py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <img
              src={lifestyleWalk}
              alt="Wandelen met de hond in de duinen bij Haarlem"
              loading="lazy" width={1920} height={1080}
              className="rounded-3xl aspect-[4/5] object-cover w-full shadow-2xl shadow-forest/10"
            />
            <div className="hidden lg:block absolute -right-8 -bottom-8 bg-cream rounded-2xl px-6 py-5 shadow-xl max-w-xs">
              <p className="eyebrow text-terracotta mb-2">Natuurlijke aanpak</p>
              <p className="text-sm text-walnut leading-relaxed">
                Voeding, beweging en verzorging, in balans afgestemd op
                jouw hond.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-olive mb-5">Onze filosofie</p>
            <h2 className="font-serif text-4xl lg:text-6xl text-forest leading-[1.05]">
              Een gezonde hond begint met <em className="text-terracotta">aandacht.</em>
            </h2>
            <p className="mt-6 text-walnut/80 text-lg leading-relaxed">
              Wij geloven dat échte zorg verder gaat dan een product op een schap.
              Het begint bij luisteren, naar de eigenaar én de hond, en eindigt
              bij oprechte begeleiding. Van voedingsadvies tot vachtverzorging,
              alles is verbonden.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { t: "Natuurlijk", d: "Eerlijke samenstellingen zonder onnodige toevoegingen." },
                { t: "Deskundig", d: "Jarenlange ervaring als dierenartsassistente." },
                { t: "Persoonlijk", d: "Advies dat past bij jouw hond, niet bij een schap." },
              ].map((x) => (
                <div key={x.t} className="border-t border-olive/30 pt-4">
                  <p className="font-serif text-xl text-forest">{x.t}</p>
                  <p className="text-sm text-walnut/70 mt-1.5">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRENDA / ABOUT */}
      <section className="container-x mt-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <p className="eyebrow text-terracotta mb-5">Het gezicht achter het centrum</p>
          <h2 className="font-serif text-5xl lg:text-6xl text-forest leading-[1.05]">
            Brenda van der Vaart
          </h2>
          <p className="mt-6 text-walnut/80 text-lg leading-relaxed max-w-xl">
            Jarenlange ervaring als dierenartsassistente bij Nico Kas, gecombineerd
            met een diepe passie voor hondenwelzijn. Brenda volgt voortdurend
            seminars en specialisatiecursussen, om de meest natuurlijke en
            doordachte aanpak te bieden voor voeding, verzorging en gezondheid.
          </p>
          <blockquote className="mt-10 border-l-2 border-terracotta pl-6 font-serif text-2xl lg:text-3xl text-forest italic max-w-lg">
            “Honden vertellen het zelf, als je goed luistert, weet je precies wat ze nodig hebben.”
          </blockquote>
          <Link to="/visie" className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-forest text-cream text-sm">
            Lees ons volledige verhaal <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2 relative">
          <img
            src={brenda}
            alt="Brenda van der Vaart in de winkel"
            loading="lazy" width={1080} height={1600}
            className="rounded-3xl aspect-[4/5] object-cover w-full"
          />
          <div className="absolute -bottom-6 -left-6 bg-terracotta text-cream rounded-2xl px-5 py-4 hidden sm:block">
            <p className="font-serif text-2xl leading-none">15+ jaar</p>
            <p className="text-xs uppercase tracking-widest mt-1 text-cream/85">ervaring</p>
          </div>
        </div>
      </section>

      {/* STORE INTERIOR FULL-BLEED */}
      <section className="mt-32">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="eyebrow text-olive mb-4">De winkel</p>
              <h2 className="font-serif text-5xl lg:text-6xl text-forest max-w-2xl leading-[1.05]">
                Een plek waar je <em className="text-terracotta">graag binnenstapt.</em>
              </h2>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-forest border-b border-forest/30 pb-1 self-start">
              Bezoek ons aan de Ramplaan <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img
            src={storeInterior}
            alt="Interieur van de boutique aan de Ramplaan Haarlem"
            loading="lazy" width={1920} height={1080}
            className="w-full h-[60vh] min-h-[420px] object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="container-x mt-32">
        <div className="relative rounded-3xl bg-forest text-cream overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--terracotta),_transparent_55%)]" />
          <div className="relative grid lg:grid-cols-2 gap-10 p-10 lg:p-20 items-center">
            <div>
              <p className="eyebrow text-sage-soft mb-5">Klaar voor de volgende stap?</p>
              <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05]">
                Kom langs, plan een afspraak, of stuur ons een bericht.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-cream text-forest text-sm font-medium">
                Plan een afspraak <ArrowUpRight size={16} />
              </Link>
              <Link to="/diensten" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-cream/40 text-cream text-sm">
                Bekijk diensten
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
