## Doel
Een normale statische website opleveren die je 1-op-1 in `public_html` kunt uploaden — geen Node-server, geen Workers, geen SSR. Alleen HTML, CSS, JS en assets.

## Situatie nu
Dit project gebruikt **TanStack Start** (SSR-framework) met een Cloudflare Worker als runtime (`src/server.ts`, `src/start.ts`, `nitro` build via `@lovable.dev/vite-tanstack-config`). De build produceert een server-bundle + client-bundle — dat draait niet op DirectAdmin shared hosting. Dat is de reden dat de huidige deploy faalt.

De site heeft geen backend/database/auth nodig (alleen content-pagina's: Home, Diensten, Visie, Reviews, Contact, sitemap). Dat maakt een statische export prima haalbaar.

## Aanpak: migratie naar Vite + React Router (pure SPA)

Ik zet de basis om naar een gewone Vite React-app die `vite build` uitvoert en een `dist/`-map oplevert met alleen statische bestanden. Die map upload je naar `public_html`.

### Wijzigingen
1. **Build-stack vervangen**
   - `vite.config.ts` → standaard `@vitejs/plugin-react` (geen TanStack Start, geen Nitro, geen Cloudflare).
   - `package.json` → scripts `dev` / `build` / `preview` via plain Vite. Verwijder TanStack Start / Nitro / Cloudflare deps.
   - Nieuwe `index.html` in projectroot (Vite entrypoint).
   - Nieuwe `src/main.tsx` die `<RouterProvider>` (React Router) mount.

2. **Routing omzetten naar React Router**
   - Alle bestanden in `src/routes/*.tsx` (index, diensten, visie, reviews, contact) blijven inhoudelijk identiek, maar:
     - `createFileRoute(...)` → gewone React-component export.
     - `<Link to="/x">` van `@tanstack/react-router` → `<Link to="/x">` van `react-router-dom`.
     - `head()`-meta → via `react-helmet-async` per pagina.
   - `__root.tsx` → `RootLayout` component met `<Outlet />` van react-router.
   - `src/routes/sitemap[.]xml.ts` (server-route) → vervangen door een statisch bestand `public/sitemap.xml`.
   - `src/routeTree.gen.ts`, `src/server.ts`, `src/start.ts`, `src/router.tsx` (TanStack-variant), `src/lib/error-capture.ts`, `src/lib/error-page.ts`, `src/lib/config.server.ts`, `src/lib/api/*` — verwijderen.

3. **Assets**
   - De `*.asset.json`-imports zijn een Lovable-conventie die alleen in deze template werkt. Ik zet ze om naar normale Vite-asset-imports (`import logo from "@/assets/logo-hgc.png"`), zodat Vite ze hashed in `dist/assets/` zet.

4. **SPA-routing op DirectAdmin (Apache)**
   - Toevoegen: `public/.htaccess` met een rewrite zodat alle paths naar `index.html` gaan (anders krijg je 404 op directe URL's of refresh):
     ```
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
     ```

5. **Resultaat**
   - `bun install && bun run build` → `dist/` map met `index.html`, `assets/…`, `sitemap.xml`, `.htaccess`, `robots.txt`.
   - Upload de **inhoud** van `dist/` naar `public_html/`. Klaar.

## Wat je verliest
- SSR / pre-rendered HTML per route → SEO werkt nog steeds (meta tags via Helmet), maar de eerste HTML is leeg tot JS laadt. Voor een kleine bedrijfssite met deze content geen probleem.
- Server-functies / API routes → nu niet in gebruik, dus geen verlies.

## Wat ik nodig heb van jou
Bevestig dat je akkoord gaat met de migratie naar een **React Router SPA** (de pragmatische, betrouwbare optie voor DirectAdmin). 

Alternatief dat ik kan doen als je dat liever hebt: **TanStack Start in prerender-modus** houden zodat per route echte statische HTML wordt gegenereerd (betere SEO/first paint), maar dat is fragieler op shared hosting en kost meer werk. Zeg het als je die variant wilt — anders ga ik door met de SPA-aanpak hierboven.
