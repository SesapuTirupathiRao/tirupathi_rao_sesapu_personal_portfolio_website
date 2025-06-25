# Tirupathi Rao Sesapu – Personal Portfolio

![Portfolio Screenshot](assets/portfolio-screenshot.png)

> A sleek, mobile‑first React + Tailwind CSS portfolio that showcases my teaching journey, Python projects, and YouTube resources in Telugu.

---

## Table&nbsp;of&nbsp;Contents
1. [Demo](#demo)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Sections Overview](#sections-overview)
5. [Quick Start](#quick-start)
6. [Folder Structure](#folder-structure)
7. [Deployment Guide](#deployment-guide)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact & Credits](#contact--credits)

---

## Demo

| Platform | URL |
|----------|-----|
| **Live** | `https://tirupathirao.dev` *(replace with your domain)* |
| **Preview** | `npm run dev` *(local Vite dev server)* |

---

## Features

- **Hero Banner** with dynamic title, role badges, CTA buttons, and social icons.
- **About Me** cards listing Skills, Tools, and Languages with progress bars.
- **Featured Projects** highlight card (Code Kreations) + internal "View Details" link.
- **Sample Projects** grid (e.g., Hostel Management System, Scientific Calculator) with thumbnails and “Read More” buttons.
- **Python Project Playlists** slider featuring YouTube thumbnails and quick‑watch CTAs.
- **YouTube & Blog** stats blocks showing channel subscribers, video count, blog posts, and daily views.
- **Let’s Connect** contact panel with email, social links, hire‑me & start‑learning buttons, and services offered.
- Fully **responsive** (mobile → 4K) with **dark theme** and accessible colors.
- Smooth **scroll animations** via Framer Motion.
- Built‑in **SEO meta tags** and Open Graph images.
- **PWA‑ready** manifest + favicon set.

---

## Tech Stack

| Layer | Tools / Libraries |
|-------|-------------------|
| **Framework** | [React 18](https://react.dev) + [Vite](https://vitejs.dev) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) · CSS Modules |
| **Routing** | [react‑router‑dom](https://reactrouter.com) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [react‑icons](https://react-icons.github.io) (Lucide + Devicon) |
| **Lint/Format** | ESLint · Prettier |
| **Deployment** | Vercel / Netlify / GitHub Pages (static export) |

---

## Sections Overview

| Section | Purpose |
|---------|---------|
| **Hero** | Quick personal intro, avatar, primary CTA (Start Learning) + social reach. |
| **About Me** | Snapshot of skills, tools, and language proficiency. |
| **Featured Projects** | Flagship project with detailed page link. |
| **Sample Projects** | Smaller but polished portfolio pieces. |
| **Python Project Playlists** | Curated YouTube playlist cards (Full Tutorials & Step‑by‑Step). |
| **YouTube & Blog** | Stats cards for channel & blog plus mission statement. |
| **Let’s Connect** | Contact form/email, social follow list, service offerings. |
| **Footer** | Quick Links, Resources, and copyright notice. |

---

## Quick Start

```bash
# 1 — Clone
$ git clone https://github.com/str‑telugu/portfolio.git
$ cd portfolio

# 2 — Install deps
$ npm install   # or pnpm / yarn

# 3 — Serve locally
$ npm run dev   # Vite on http://localhost:5173

# 4 — Build production
$ npm run build # output → dist/
```

Environment variables (optional):
```
VITE_GA_ID="G-XXXXXXX"        # Google Analytics
VITE_CONTACT_EMAIL="tirupathiraosesapu@gmail.com"
```

---

## Folder Structure

```
portfolio/
├─ public/           # static assets (favicon, manifest, preview images)
├─ src/
│  ├─ assets/        # images, icons, logos
│  ├─ components/    # reusable UI (Button, Card, SectionHeading, …)
│  ├─ data/          # JSON/TS data files (projects, playlists, links)
│  ├─ pages/         # routed pages (Home, ProjectDetails, Contact)
│  ├─ hooks/         # custom React hooks
│  ├─ styles/        # Tailwind config & globals
│  └─ main.jsx       # app entry
├─ .eslintrc.cjs
├─ tailwind.config.cjs
├─ vite.config.js
└─ README.md
```

---

## Deployment Guide

1. **Static hosting (Vercel/Netlify):**
   - Set the build command to `npm run build` and output directory to `dist`.
   - Add environment variables via platform dashboard.
2. **GitHub Pages:**
   ```bash
   npm run build
   npx gh-pages -d dist
   ```
3. **Custom domain:** point `CNAME` record to the chosen platform.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repo and create your branch: `git checkout -b feature/awesome-feature`  
2. Commit your changes: `git commit -m "Add awesome feature"`  
3. Push to the branch: `git push origin feature/awesome-feature`  
4. Open a Pull Request.

Make sure your code follows the existing style, passes `npm run lint`, and includes unit or integration tests when relevant.

---

## License

Content (text, videos, blog posts) is licensed under **CC BY‑NC‑ND 4.0**.  
Source code is released under the **MIT License** — see [`LICENSE`](LICENSE) for details.

---

## Contact & Credits

- **Email:** [tirupathiraosesapu@gmail.com](mailto:tirupathiraosesapu@gmail.com)
- **YouTube:** [STR Telugu](https://youtube.com/@strtelugu)
- **Blog:** [STR EduTuts](https://stredututs.blogspot.com)
- **X (Twitter):** `@str_telugu`
- **LinkedIn:** [`in/tirupathirao`](https://linkedin.com/in/tirupathirao)

> Made with ❤️ using React, Tailwind CSS, and lots of caffeine.

Iconography by [Lucide](https://lucide.dev) · Fonts by Google Fonts · Deployed on Vercel.
