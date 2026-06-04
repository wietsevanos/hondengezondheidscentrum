import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
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
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-forest">Er ging iets mis</h1>
        <p className="mt-2 text-sm text-walnut/70">Probeer de pagina te vernieuwen.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-5 py-2.5 rounded-full bg-forest text-cream text-sm"
          >
            Probeer opnieuw
          </button>
          <a href="/" className="px-5 py-2.5 rounded-full border border-border text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hondengezondheidscentrum Haarlem, Premium hondenwelzijn" },
      { name: "description", content: "Natuurlijke voeding, trimsalon en wellness producten voor jouw hond. Eén vertrouwde plek aan de Ramplaan in Haarlem." },
      { property: "og:title", content: "Hondengezondheidscentrum Haarlem, Premium hondenwelzijn" },
      { name: "twitter:title", content: "Hondengezondheidscentrum Haarlem, Premium hondenwelzijn" },
      { property: "og:description", content: "Natuurlijke voeding, trimsalon en wellness producten voor jouw hond. Eén vertrouwde plek aan de Ramplaan in Haarlem." },
      { name: "twitter:description", content: "Natuurlijke voeding, trimsalon en wellness producten voor jouw hond. Eén vertrouwde plek aan de Ramplaan in Haarlem." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d429726f-b973-4ff2-bbd1-acb01989a119/id-preview-0640ba73--c16f1f09-0866-42b4-bb58-7e77aed62588.lovable.app-1780606127612.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d429726f-b973-4ff2-bbd1-acb01989a119/id-preview-0640ba73--c16f1f09-0866-42b4-bb58-7e77aed62588.lovable.app-1780606127612.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
