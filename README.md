 /># Trailhead — Responsive Frontend Interface

**Project 1 — Full Stack Development Internship (DecodeLabs)**

A responsive landing page for a fictional trail-finding app, built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks — following a strict mobile-first workflow.


---

## Screenshots

| Mobile (< 768px) | Tablet (≥ 768px) | Desktop (≥ 1024px) |
<img width="804" height="616" alt="Screenshot 2026-07-23 143753" src="https://github.com/user-attachments/assets/9141dc24-1644-4195-a97a-cda45c9e747c" />
<img width="796" height="614" alt="Screenshot 2026-07-23 143823" src="https://github.com/user-attachments/assets/0170434e-c368-42f0-8f7d-0a4a9578831a" />
<img width="803" height="617" alt="Screenshot 2026-07-23 143917" src="https://github.com/user-attachments/assets/58ce0765-5b45-44ae-bc46-62da6815ae5a" />

## Wireframe

Grayscale wireframe showing how the layout reflows across breakpoints:

<img width="2720" height="2920" alt="responsive_wireframe_breakpoints" src="https://github.com/user-attachments/assets/31035769-54aa-4f2a-a3b3-31e31601f20f" />

## Tech stack

- **HTML5** — semantic landmarks (`header`, `nav`, `main`, `article`, `footer`)
- **CSS3** — CSS Grid for macro layout, Flexbox for components, `clamp()` for fluid typography
- **Vanilla JavaScript** — mobile nav toggle, save-trail state, route planner logic
- No frameworks, no build step

## Responsive strategy

Built mobile-first: base styles are single-column, then progressively enhanced with `min-width` media queries.

| Breakpoint | Layout |
|---|---|
| `< 768px` | 1 column, hamburger nav |
| `≥ 768px` (tablet) | 2-column card grid, full nav bar |
| `≥ 1024px` (desktop) | 4-column card grid, side-by-side planner + sidebar |

## Color palette

| Name | Hex | Role |
|---|---|---|
| Mocha Mousse | `#A5958F` | Stability / primary actions |
| Ethereal Blue | `#A0D4E0` | Trust / secondary accents |
| Moonlit Grey | `#F2F0EA` | Refinement / page background |

Typography: Montserrat (headings), Open Sans (body). Max 2 font families, 3 weights, per the brief's design constraint.

## Accessibility & performance

Audited with Lighthouse (served locally, not opened via `file://`):

- **Performance:** 100
- **Accessibility:** 96

Includes visible `:focus-visible` keyboard focus states, `aria-expanded`/`aria-live` on interactive elements, and semantic landmark structure for screen readers.

## Run it locally

```bash
git clone https://github.com/<your-username>/trailhead-responsive-ui.git
cd trailhead-responsive-ui
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Project structure

```
trailhead/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

Built as part of the DecodeLabs Full Stack Development internship, Batch 2026.
