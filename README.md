# creative-portfolio-template

This is my final project for the Web Foundations course at UDIT. It's a portfolio template built with vanilla HTML, CSS, and JavaScript, showcasing my work as a Graphic and Multimedia Design student.

You can find my project live here: [https://anacallejon.github.io/creative-portfolio-web/] (https://anacallejon.github.io/creative-portfolio-web/)

## Project Description

A fully responsive portfolio website featuring my design projects across editorial, branding, 3D, and digital work. The site includes an interactive project gallery with filtering capabilities, custom animations, and a clean, modern interface that works across all devices.

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (custom animations, Grid, Flexbox)
- JavaScript (vanilla, no libraries)
- GitHub Pages (hosting)

**Fonts:** Unbounded and Petit Formal Script from Google Fonts

## Design System

### Color Palette

| Color                  | Hex       | RGB                  | Usage                           |
| ---------------------- | --------- | -------------------- | ------------------------------- |
| **Primary Pink**       | `#cc1753` | `rgb(204, 23, 83)`   | Main accent color, links, CTAs  |
| **Primary Purple**     | `#8b93bc` | `rgb(139, 147, 188)` | Navbar, secondary elements      |
| **Secondary Lavender** | `#b2c1ed` | `rgb(178, 193, 237)` | Backgrounds, cards              |
| **Light Blue**         | `#cbd1ea` | `rgb(203, 209, 234)` | Glassmorphism effects, overlays |

### Typography

- **Primary Font:** [Unbounded](https://fonts.google.com/specimen/Unbounded)

  - Weights: Light (200), Regular (400), Medium (500), SemiBold (600), Bold (700)
  - Usage: Body text, headings, UI elements

- **Accent Font:** [Petit Formal Script](https://fonts.google.com/specimen/Petit+Formal+Script)
  - Weight: Regular (400)
  - Usage: Decorative headings, taglines

## Project Structure

```
creative-portfolio-web/
├── index.html
├── projects.html
├── about.html
├── 404.html
├── README.md
├── LICENSE
├── .gitignore
├── docs/
│   └── plan.md
└── assets/
    ├── css/
    │   ├── index.css
    │   ├── base.css
    │   ├── layout.css
    │   ├── components.css
    │   └── reset.css
    ├── js/
    │   └── main.js
    └── img/
```

## Features

- Custom animated cursor (desktop only)
- Infinite scrolling carousel
- Project filtering by category
- Modal viewer for project details
- Responsive hamburger navigation
- Scroll-based animations
- Custom 404 page

## Setup

Clone the repository:

```bash
git clone https://github.com/anacallejon/creative-portfolio-web.git
cd creative-portfolio-web
```

Open `index.html` in your browser, or use a local server:

**With VS Code Live Server:**
Right-click `index.html` and select "Open with Live Server"

**With Python:**

```bash
python -m http.server 8000
```

**With Node:**

```bash
npx serve
```

## Customization

**Colors:** Update CSS variables in `assets/css/base.css`

**Fonts:** Change Google Fonts imports in HTML head and CSS font-family declarations

**Content:** Edit HTML files directly. Project cards are in `projects.html`, experience details in `about.html`

**Images:** Replace files in `assets/img/` (maintain aspect ratios for best results)

## AI Usage

I used ChatGPT and Claude to help with parts of this project, primarily for JavaScript functionality and some CSS animations. The AI assisted with:

- JavaScript code for the custom cursor, modal system, and filtering logic
- CSS animation structures like the infinite carousel and blob morphing
- Debugging and refining code I had already written

Features I developed on my own using course materials:

- Page layouts and responsive design
- Basic animations and scroll effects
- HTML structure and semantic markup
- All content and visual design decisions
- Form styling and structure

I didn't save the specific prompts because I used AI more as an on-the-spot problem solver while building features, rather than planning everything upfront. When I got stuck or needed to implement something I hadn't learned yet, I'd ask for help and then adapt the suggestions to fit what I was trying to do.

All AI-generated code was reviewed and modified before implementation. The detailed breakdown of what was built with AI assistance versus independently is documented in `docs/plan.md`.

## License

MIT License. See LICENSE file for details.

## Screenshots

### Hero Section

<p align="center">
  <img src="https://ik.imagekit.io/anacallejon/img/screenshots/hero1.png" alt="Hero Desktop" width="49%">
  <img src="https://ik.imagekit.io/anacallejon/img/screenshots/hero2.png" alt="Hero Mobile" width="49%">
</p>

### Projects Grid

<p align="center">
  <img src="https://ik.imagekit.io/anacallejon/img/screenshots/projects1.png" alt="Projects Desktop" width="49%">
  <img src="https://ik.imagekit.io/anacallejon/img/screenshots/projects2.png" alt="Projects Mobile" width="49%">
</p>

### About Section

<p align="center">
  <img src="https://ik.imagekit.io/anacallejon/img/screenshots/about1.png" alt="About Desktop" width="49%">
  <img src="https://ik.imagekit.io/anacallejon/img/screenshots/about2.png" alt="About Mobile" width="49%">
</p>

### Contact Form

<p align="center">
  <img src="https://ik.imagekit.io/anacallejon/img/screenshots/contact1.png" alt="Contact Section" width="100%">
</p>

## Contact

Ana Callejón Alén

- Instagram: @calen.between
- LinkedIn: linkedin.com/in/ana-callejón-alén-6879a02a6
- Email: ana.callejonalen@gmail.com

## Credits

- Course: Web Foundations, WEB ATELIER (UDIT)
- Professor: Rubén Vega Balbás, PhD
- Fonts: Google Fonts
- Hosting: GitHub Pages

Built as final project for Web Foundations course, 2024-2025.
