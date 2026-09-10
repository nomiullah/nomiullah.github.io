# Noman Ullah — Portfolio

Static one-page site. Same idea as the old `nomiullah.github.io` repo: **HTML + CSS + JS only**. No React, no Vite, no `npm run build`.

Open `index.html` in a browser, or push this folder to GitHub Pages.

## Folders

```
index.html
style/style.css
scripts/content.js   ← edit placeholder text, project links, videos here
scripts/hero.js      ← portrait particles + scroll tilt
scripts/main.js      ← nav, theme, filters, form
img/noman.png        ← your headshot
resume/noman-ullah-jannat.pdf
```

## Publish on GitHub Pages

1. Copy these files into your `nomiullah.github.io` repo (the root, same as the old site).
2. Commit and push.
3. The site will be live at `https://nomiullah.github.io/`.

Do **not** push `node_modules`, `src`, or `package.json` if those leftover Vite files are still on disk.

## Swap content later

- **Headshot:** replace `img/noman.png`
- **Resume:** replace `resume/noman-ullah-jannat.pdf`
- **Projects:** edit `projects` in `scripts/content.js` (`image` + `url`)
- **Testimonial videos:** set `src` / `poster` in `scripts/content.js`
- **WhatsApp:** change `whatsapp` in `scripts/content.js` (`https://wa.me/923450571037`)
- **Contact form:** hook Formspree or EmailJS in `scripts/main.js` (`TODO` comment)

Dark mode is the default. The toggle saves to `localStorage` as `noman-theme`.
