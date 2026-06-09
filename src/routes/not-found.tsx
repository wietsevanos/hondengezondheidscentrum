import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex-1 flex items-center justify-center px-4 py-32">
      <div className="max-w-md text-center">
        <p className="eyebrow text-terracotta mb-4">404</p>
        <h1 className="font-serif text-5xl text-forest mb-4">Pagina niet gevonden</h1>
        <p className="text-walnut/70 mb-8">Deze pagina hebben we (nog) niet in de winkel.</p>
        <Link to="/" className="inline-flex px-6 py-3 rounded-full bg-forest text-cream text-sm">
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
