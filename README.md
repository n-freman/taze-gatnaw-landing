# Täze Gatnaw — Landing Page

Landing page for **Täze Gatnaw** (Turkmen: "New Route") — a logistics company specializing in liquified gas transportation via railway and trucks across Turkmenistan.

**Live:** [https://n-freman.github.io/taze-gatnaw-landing/](https://n-freman.github.io/taze-gatnaw-landing/)

## Tech Stack

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-26-26A69A?logo=i18next&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_Icons-1.7-F56565?logo=lucide&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-scoped-1572B6?logo=cssmodules&logoColor=white)

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 8** | Build tool & dev server |
| **Framer Motion** | Scroll animations, parallax, transitions |
| **react-i18next** | Trilingual support (Turkmen, Russian, English) |
| **Lucide React** | Icon library |
| **CSS Modules** | Scoped component styling |
| **Space Grotesk** | Heading font |
| **Inter** | Body font |

## Features

- **Trilingual** — Turkmen (default), Russian, English with instant language switching
- **7 Sections** — Hero, Services, About, Fleet, Safety, Geography, Contact
- **Scroll Animations** — Framer Motion powered fade-ins, counters, staggered reveals
- **SVG Route Animation** — Animated stroke drawing with traveling dots in Geography section
- **Diagonal Section Dividers** — SVG-based angled transitions echoing the logo's slash motif
- **Responsive** — Mobile-first, works across all screen sizes
- **AI-Generated Images** — Section backgrounds generated via FAL AI

## Getting Started

### Prerequisites

- **Node.js 22+** (required for Vite 8 / Rolldown)
- **npm**

### Install & Run

```bash
# Clone the repo
git clone https://github.com/n-freman/taze-gatnaw-landing.git
cd taze-gatnaw-landing

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build

# Preview the production build locally
npm run preview
```

The output is in the `dist/` folder.

## Deploy to GitHub Pages

### 1. Create a GitHub repository

```bash
gh repo create your-repo-name --public --source=. --push
```

### 2. Set the base path in `vite.config.js`

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

### 3. Add the deploy workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: rm -f package-lock.json && npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Enable GitHub Pages

Go to **Settings → Pages** in your repository and set **Source** to **GitHub Actions**.

### 5. Push and deploy

```bash
git add -A && git commit -m "Initial deploy" && git push
```

The site will be live at `https://<username>.github.io/<repo-name>/` after the workflow completes.

## Project Structure

```
src/
├── i18n/                  # Translation files (tk, ru, en)
├── components/
│   ├── Navbar/            # Sticky nav with blur, scroll spy, mobile menu
│   ├── Hero/              # Full-viewport hero with parallax
│   ├── Services/          # Rail + truck service cards
│   ├── About/             # Company info with animated stat counters
│   ├── Fleet/             # Fleet stats with stroke-text numbers
│   ├── Safety/            # Safety feature card grid
│   ├── Geography/         # Animated SVG route visualization
│   ├── Contact/           # Split-layout contact section
│   ├── Footer/
│   ├── LanguageSwitcher/  # TK / RU / EN toggle
│   └── shared/            # AnimatedSection, SectionDivider, CountUp
├── hooks/                 # useScrollSpy
├── assets/logos/          # SVG logos
public/
├── images/                # AI-generated section images
└── favicon.svg
```

## Regenerating Images

The project includes a `generate_images.py` script that uses the [FAL AI](https://fal.ai) API to generate section backgrounds:

```bash
pip install fal-client
python3 generate_images.py
```

Images are saved to `public/images/`.

## License

MIT
