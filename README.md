# Yağızhan Keskin | Personal website

A personal engineering website built with HTML, CSS and JavaScript. No framework, build step, runtime dependencies or external fonts.

## Preview

Open `index.html` directly or serve this directory:

```bash
python3 -m http.server 8765
```

Visit `http://localhost:8765`.

## Content

- `index.html`: introduction, six technical focus areas, experience, selected projects, education, leadership, teaching, toolkit, approach, visible certifications and contact details.
- `styles.css`: neutral light and dark palettes, muted blue accents, responsive layouts, subtle animations and print styles.
- `script.js`: theme preference, scroll entrance animations and footer year.
- `assets/favicon.svg`: site icon.
- `CV-2026oct.pdf`: source for professional and academic details.

Project summaries were checked against the public [LinkedIn profile](https://tr.linkedin.com/in/ya%C4%9F%C4%B1zhan-keskin-001401273) and [GitHub repositories](https://github.com/YKesX). Dates and qualifications follow the supplied CV. The Mechanical Engineering minor and MONAI experience are retained from the original website. The page does not include the CV's home address, date of birth or phone number.

Edit the HTML directly to update content. Keep copy factual and concise. Avoid em dashes, Oxford commas and marketing slogans.

## Appearance

The page uses neutral black, white and gray. Muted blue accents appear in section rules, the contact button, role labels, qualification scores and links. Backgrounds stay neutral.

The theme defaults to System and follows operating-system changes. Light and Dark overrides are saved in `localStorage`. Choosing System clears the override. Controls still work for the current visit if storage is unavailable. Without JavaScript, CSS respects the system theme.

The staggered introduction, 1.1-second scroll reveals and link transitions respect `prefers-reduced-motion`. All seven course certificates remain visible without an accordion. All content is visible without JavaScript, and scroll animations never hide content while waiting for it to enter the viewport. Navigation stays visible on mobile and all controls work with a keyboard.

## Deployment

Deploy `index.html`, `styles.css`, `script.js` and `assets/` to any static host using the repository's existing publishing setup. No build is required. The source CV is not required to run the website.

Metadata and the canonical URL use `https://ykeskin.com/`.
