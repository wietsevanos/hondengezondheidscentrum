import { createFileRoute } from "@tanstack/react-router";
import brendaAsset from "@/assets/brenda-shop-dogs.jpg.asset.json";
const brenda = brendaAsset.url;
import lifestyleWalkAsset from "@/assets/visie-food.jpg.asset.json";
import storeInteriorAsset from "@/assets/brenda-shop-wide.jpg.asset.json";
import diplomaAsset from "@/assets/diploma-voedingsdeskundige.jpeg.asset.json";
const storeInterior = storeInteriorAsset.url;
const diploma = diplomaAsset.url;

const lifestyleWalk = lifestyleWalkAsset.url;


export const Route = createFileRoute("/visie")({
  head: () => ({
    meta: [
      { title: "Onze Visie, Hondengezondheidscentrum Haarlem" },
      { name: "description", content: "Het verhaal van Brenda van der Vaart en de natuurlijke filosofie achter het Hondengezondheidscentrum in Haarlem." },
      { property: "og:title", content: "Onze visie op hondenwelzijn" },
      { property: "og:description", content: "Een natuurlijke, deskundige en persoonlijke aanpak voor elke hond." },
      { property: "og:image", content: brenda },
    ],
  }),
  component: VisiePage,
});

function VisiePage() {
  return (
    <>
      <section className="container-x pt-16 lg:pt-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow text-terracotta mb-5">Onze visie</p>
          <h1 className="font-serif text-5xl lg:text-7xl text-forest leading-[1.02]">
            Welzijn begint bij <em className="text-olive">aandacht.</em>
          </h1>
          <p className="mt-8 text-lg text-walnut/80 leading-relaxed max-w-xl">
            Wij geloven dat ieder hond gezien en gehoord moet worden. Onze aanpak
            is natuurlijk, deskundig en persoonlijk, een combinatie van jarenlange
            ervaring, voortdurende bijscholing en oprechte liefde voor het vak.
          </p>
        </div>
        <div className="lg:col-span-5">
          <img src={lifestyleWalk} alt="Hond in de duinen" loading="lazy" width={1920} height={1080}
            className="rounded-3xl aspect-[4/5] object-cover w-full" />
        </div>
      </section>

      {/* Story */}
      <section className="mt-32 bg-sage-soft/40">
        <div className="container-x py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img src={brenda} alt="Brenda van der Vaart" loading="lazy" width={1080} height={1600}
              className="rounded-3xl aspect-[4/5] object-cover w-full" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-olive mb-5">Brenda van der Vaart</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-forest leading-tight">
              Van dierenartsassistente naar hondenwelzijn-specialist.
            </h2>
            <div className="mt-8 space-y-5 text-walnut/85 leading-relaxed">
              <p>
                Na jarenlange ervaring als dierenartsassistente bij Nico Kas
                groeide Brenda's passie voor hondenwelzijn uit tot een eigen
                missie: hondeneigenaren ondersteunen met natuurlijke, eerlijke
                en doordachte zorg.
              </p>
              <p>
                Door voortdurend seminars en specialisatiecursussen te volgen,
                blijft die expertise scherp en up-to-date. Geen losse adviezen ,
                maar een doorlopende relatie waarin je hond echt centraal staat.
              </p>
              <p>
                Het resultaat? Een centrum waar voeding, verzorging en aandacht
                samenkomen, en waar je altijd welkom bent om te overleggen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kwalificaties */}
      <section className="container-x mt-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow text-terracotta mb-5">Kwalificaties</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-forest leading-tight">
              Officieel gediplomeerd <em className="text-olive">voedingsdeskundige voor honden.</em>
            </h2>
            <p className="mt-6 text-walnut/80 leading-relaxed max-w-lg">
              Brenda voltooide de opleiding <span className="text-forest">Voedingsdeskundige voor honden</span> bij
              Lotte's Logica, geaccrediteerd door de Raad van Beheer met 30 punten in categorie B.
              Een fundament dat dagelijks wordt aangevuld met seminars en specialisatiecursussen.
            </p>
            <ul className="mt-8 space-y-3 text-walnut/80">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta shrink-0" />
                <span>Diploma uitgereikt 20 februari 2020</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta shrink-0" />
                <span>Geaccrediteerd door de Raad van Beheer (30 punten, cat. B)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta shrink-0" />
                <span>Voortdurende bijscholing in voeding & welzijn</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <figure className="group relative rounded-3xl bg-cream p-4 lg:p-6 shadow-[0_30px_60px_-30px_rgba(43,57,46,0.25)] ring-1 ring-walnut/10 transition-transform duration-700 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-inset ring-walnut/5" />
              <img
                src={diploma}
                alt="Diploma Voedingsdeskundige voor honden — Brenda van der Vaart"
                loading="lazy"
                width={1480}
                height={1050}
                className="w-full h-auto rounded-2xl object-contain"
              />
              <figcaption className="mt-4 flex items-center justify-between px-2 text-xs uppercase tracking-[0.18em] text-walnut/60">
                <span>Lotte's Logica</span>
                <span>Diploma · 2020</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Principles */}

      <section className="container-x mt-32">
        <h2 className="font-serif text-4xl lg:text-5xl text-forest max-w-2xl leading-tight">
          Vier principes die alles bepalen wat wij doen.
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden">
          {[
            { n: "01", t: "Natuurlijk", d: "Producten met eerlijke ingrediënten, zonder onnodige toevoegingen of marketing-beloftes." },
            { n: "02", t: "Deskundig", d: "Advies gebaseerd op kennis, ervaring en voortdurende bijscholing, niet op trends." },
            { n: "03", t: "Persoonlijk", d: "Elke hond is anders. Onze begeleiding sluit daar exact op aan." },
            { n: "04", t: "Verbonden", d: "Voeding, vacht en welzijn zijn één, onze diensten ook." },
          ].map((p) => (
            <div key={p.n} className="bg-card p-10 lg:p-14">
              <p className="font-serif text-terracotta text-xl">{p.n}</p>
              <h3 className="font-serif text-3xl text-forest mt-3">{p.t}</h3>
              <p className="text-walnut/75 mt-3 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-32">
        <img src={storeInterior} alt="Interieur van het centrum" loading="lazy" width={1920} height={1080}
          className="w-full rounded-3xl aspect-[16/8] object-cover" />
      </section>
    </>
  );
}
