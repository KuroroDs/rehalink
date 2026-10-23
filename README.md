# Rehalink

An Arabic-first rehabilitation website built with Astro. The site includes the home,
contact, and privacy pages. The hero uses an original, lightweight SVG illustration,
so it works without a video or external media download.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## WhatsApp destination

Set the contact destination in a local `.env` file before using the contact form:

```bash
PUBLIC_WHATSAPP_NUMBER=212600000000
```

If that value is not configured, the site keeps the contact flow disabled and shows a clear message instead of inventing a number.

To use a real photo or video in the hero, replace `public/images/hero-scene.svg`
and update `src/components/home/Hero.astro` accordingly.
