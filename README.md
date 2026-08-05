# Astro landing page — šablóna

Boilerplate pre jednostránkové landing pages nasadzované na **Netlify** s natívnym odosielaním formulárov cez **Netlify Forms**.

Stack: [Astro](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com) + `@astrojs/sitemap`.

## Ako začať nový projekt

1. **Skopíruj šablónu** do nového priečinka a nainštaluj závislosti:

   ```bash
   cp -R astro-landing-page-template novy-projekt
   cd novy-projekt
   npm install
   git init
   ```

2. **Vyplň `src/data/site.ts`** — identita webu na jednom mieste:
   - názov firmy, jazyk
   - GTM ID (nechaj prázdne, ak sa GTM nepoužíva — skript sa potom vôbec nevloží)
   - logo, favicon, og:image
   - GDPR URL, kontaktné údaje
   - údaje pre JSON-LD (typ firmy, adresa)

3. **Vyplň `src/data/content.ts`** — všetky texty stránky (hero, služby, benefity, postup, referencie, FAQ, formulár, pätička). Štruktúra je predpripravená s placeholder textami.

4. **Vymeň obrázky v `public/images/`** (placeholder verzie nahraď reálnymi, zachovaj názvy alebo uprav cesty v `site.ts` / `content.ts`):
   - `logo.webp` — logo firmy
   - `favicon.png` — favicon
   - `hero-bg.webp` — pozadie hero sekcie (používa sa aj ako og:image)
   - `realizacia-01.webp` … `realizacia-04.webp` — galéria realizácií
   - `icon-home.jpeg`, `icon-badge.jpeg`, `icon-shield.jpeg`, `icon-clock.jpeg` — ikony trust baru

5. **Uprav branding v `src/styles/global.css`**:
   - `--color-brand`, `--color-brand-dark`, `--color-pill` — farby značky
   - `--font-heading`, `--font-body` — fonty (Google Fonts link je v `src/layouts/Layout.astro`)

6. **Nastav doménu v `astro.config.mjs`** (`site:`) — používa sa pre canonical URL, og:url a sitemap.

7. **Over lokálne**: `npm run dev` → skontroluj všetky sekcie a `npm run build`, či prejde bez chýb.

## Sekcie stránky

Stránka sa skladá v `src/pages/index.astro` — sekciu odstrániš zmazaním riadku, poradie zmeníš presunutím:

| Komponent | Účel |
|---|---|
| `Header` | logo + CTA tlačidlo na formulár |
| `Hero` | hlavný nadpis so zvýraznenou časťou, podnadpis, CTA |
| `TrustBar` | 4 dôveryhodnostné body s ikonami |
| `Sluzby` | 3 karty služieb |
| `Benefity` | zoznam benefitov |
| `Postup` | 4 kroky spolupráce |
| `Referencie` | referencie zákazníkov + CTA |
| `Faq` | často kladené otázky (generuje aj FAQ JSON-LD) |
| `KontaktForm` | kontaktný formulár (Netlify Forms) |
| `Realizacie` | galéria fotiek |
| `Footer` | logo, GDPR odkaz, kontakt |

Stránka `/dakujeme` je cieľ presmerovania po odoslaní formulára (je vylúčená zo sitemap a má `noindex`).

## Formulár (Netlify Forms)

Formulár v `src/components/KontaktForm.astro` používa:

- `data-netlify="true"` — natívne spracovanie Netlify
- honeypot pole (`bot-field`) proti spamu
- reCAPTCHA (`data-netlify-recaptcha`)
- presmerovanie na `/dakujeme` po odoslaní

Polia a možnosti selectov sa upravujú v `content.ts` (objekt `formular`). Pri pridaní/odobratí poľa uprav aj HTML formulára.

**Po prvom deployi v Netlify admine:**

1. Over, že Netlify formulár zdetegoval — **Forms** v projekte (detekciu formulárov treba mať zapnutú: Forms → Enable form detection).
2. Nastav e-mailové notifikácie: **Forms → Form notifications → Add notification**.
3. reCAPTCHA funguje automaticky (Netlify dodá vlastné kľúče).
4. Ak zmeníš `name` formulára, zmeň aj hidden input `form-name`.

## Deploy na Netlify

1. Vytvor nový projekt v Netlify (z git repozitára alebo drag & drop `dist/`).
2. Build nastavenia berie z `netlify.toml` (build: `npm run build`, publish: `dist`).
3. Nastav vlastnú doménu a tú istú doménu zapíš do `astro.config.mjs`.

## Tracking

Google Tag Manager sa vkladá automaticky (skript v `<head>` + noscript za `<body>`), ak je v `site.ts` vyplnené `gtmId`. Ďalšie meracie kódy (Meta Pixel, GA4) patria na označené miesta `<!-- TRACKING: ... -->` v `src/layouts/Layout.astro`.

## SEO

- title + description sa nastavujú v `content.ts` (objekt `seo`)
- canonical URL, Open Graph a Twitter meta tagy generuje `Layout.astro`
- JSON-LD firmy (LocalBusiness) a FAQ generuje `index.astro` z dát v `site.ts` a `content.ts`
- sitemap generuje `@astrojs/sitemap`, `robots.txt` je v `public/`

## Príkazy

| Príkaz | Účel |
|---|---|
| `npm run dev` | lokálny vývoj na `localhost:4321` |
| `npm run build` | produkčný build do `dist/` |
| `npm run preview` | náhľad produkčného buildu |
