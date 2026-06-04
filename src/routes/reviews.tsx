import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Hondengezondheidscentrum Haarlem" },
      { name: "description", content: "Ervaringen van hondeneigenaren met De Houten Hond, Hondentrimsalon Elswout en Bottenbox.nl in Haarlem." },
      { property: "og:title", content: "Wat klanten over ons zeggen" },
      { property: "og:description", content: "Lees authentieke reviews van hondeneigenaren uit Haarlem en omgeving." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Sanne D.", brand: "De Houten Hond", text: "Eerlijk en deskundig advies. Mijn hond eet voor het eerst écht met plezier, en haar vacht is glanzender dan ooit.", stars: 5 },
  { name: "Mark B.", brand: "Elswout", text: "De beste trimsalon waar we ooit zijn geweest. Onze hond komt rustig binnen en blij weer naar buiten.", stars: 5 },
  { name: "Lotte v.K.", brand: "Bottenbox", text: "De boxen zijn fantastisch — kwaliteit, variatie en mooie verpakking. Een cadeautje voor onze hond én voor ons.", stars: 5 },
  { name: "Pieter J.", brand: "De Houten Hond", text: "Brenda neemt écht de tijd. Geen verkooppraatje, maar oprecht advies waar je iets aan hebt.", stars: 5 },
  { name: "Inge M.", brand: "Elswout", text: "Vakkundig, lief en altijd persoonlijk. Onze pup is hier vanaf dag één op haar gemak.", stars: 5 },
  { name: "Tessa R.", brand: "Bottenbox", text: "Onze hond is dol op de kauwbox. Het bestelproces is soepel en de selectie is iedere keer top.", stars: 5 },
];

function ReviewsPage() {
  return (
    <>
      <section className="container-x pt-16 lg:pt-24">
        <p className="eyebrow text-terracotta mb-5">Reviews</p>
        <h1 className="font-serif text-5xl lg:text-7xl text-forest max-w-3xl leading-[1.02]">
          Wat hondeneigenaren <em className="text-olive">over ons zeggen.</em>
        </h1>
        <div className="mt-10 flex items-center gap-6">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="text-terracotta fill-terracotta" size={20} />
            ))}
          </div>
          <p className="text-walnut/80"><span className="font-serif text-2xl text-forest">4.9</span> · Google Reviews</p>
        </div>
      </section>

      <section className="container-x mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <article
            key={i}
            className={`rounded-3xl p-8 lg:p-10 flex flex-col gap-6 ${
              i % 3 === 0 ? "bg-sage-soft/50" : i % 3 === 1 ? "bg-sand" : "bg-card"
            }`}
          >
            <Quote className="text-terracotta" />
            <p className="font-serif text-xl lg:text-2xl text-forest leading-snug italic">"{r.text}"</p>
            <div className="mt-auto pt-6 border-t border-border/60">
              <p className="text-sm text-forest font-medium">{r.name}</p>
              <p className="text-xs text-walnut/70 uppercase tracking-widest mt-1">{r.brand}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
