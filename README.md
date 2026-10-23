# Rehalink

An Arabic-first rehabilitation website built with Astro. The site includes the home,
contact, and privacy pages. The hero uses the local `public/videos/intro.mp4` video with an original SVG poster
and fallback. Service videos and their local poster images are stored under
`public/videos/` and `public/images/`.
The adult-stuttering section currently uses the local support illustration because
`public/videos/stuttering-adults.mp4` was not present in the project asset inventory.

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

For local development, set a confirmed WhatsApp destination in a local `.env` file:

```bash
PUBLIC_WHATSAPP_NUMBER=REPLACE_WITH_CONFIRMED_NUMBER
```

Replace the placeholder with the confirmed international destination number using
digits only (including the country code). Never commit the actual destination in
source code. If it is not configured, the form explains that WhatsApp is unavailable.

For GitHub Pages, add a repository Actions variable named
`PUBLIC_WHATSAPP_NUMBER` under **Settings → Secrets and variables → Actions → Variables**.
The build passes that variable to Astro; if it is unset, no destination is invented.
