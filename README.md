# Mi Conta Universal — micontau.com

Landing page bilingüe (ES/EN) para Mi Conta Universal · Cincinnati, OH.
Cliente: José Miranda · Proyecto ProCode Dev.

## Correr el proyecto

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

> El `node_modules` está instalado con binarios nativos de Windows. El build
> corre en Windows, no dentro de una VM Linux.

## Estructura

```
src/
├─ styles/global.css      Tailwind + tokens de marca (:root) + animaciones
├─ lib/ui.ts              recetas de clases compartidas (botones, cards, inputs)
├─ layouts/Layout.astro   <head> SEO, hreflang, OG, JSON-LD, scripts globales
├─ components/            Header, Hero, ValueStrip, Services, About, Guide,
│                         Faq, Contact, Footer, WhatsAppFloat, Contau
└─ pages/index.astro      composición de la página
public/                   logo, isotipo, favicon, apple-touch-icon, og-image,
                          robots.txt, sitemap.xml, site.webmanifest
```

## Marca

La paleta sale del logo del cliente:

| Token | Valor |
|---|---|
| `--navy-900` → `--navy-600` | `#062748` → `#16457C` |
| `--green-900` → `--green-500` | `#045C2C` → `#17A34A` |
| Títulos | Montserrat |
| Cuerpo | Inter |

## Bilingüe

No hay rutas `/es` y `/en`. El español va en el HTML y el inglés en atributos:

- `data-en="..."` — contenido (admite markup, con comillas simples)
- `data-en-ph="..."` — placeholder de inputs
- `data-en-aria="..."` — aria-label

Un script en `Layout.astro` cambia el idioma sin recargar, también el `<title>` y
la meta description. Recuerda la elección en `localStorage` y respeta `?lang=en`.

## Antes de publicar

- [ ] `ACCESS_KEY` de Web3Forms en el script de formularios de `Layout.astro`
- [ ] `GA_MEASUREMENT_ID`, `META_PIXEL_ID`, `GSC_VERIFICATION` en el frontmatter de `Layout.astro`
- [ ] PDF de la guía gratuita (sin él, la sección "Guía gratuita" no debe publicarse)
- [ ] Enlace de Instagram en `Footer.astro`
- [ ] Revisión del copy en inglés por parte del cliente
- [ ] QA: que en todo el sitio solo aparezca el 513-827-0407
