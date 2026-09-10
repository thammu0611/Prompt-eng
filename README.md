# Thameem Institute of Technology — Official Website

A responsive, multi-page website for a fictional educational institution, built with **React.js + Vite + Tailwind CSS**.
Developed by **Ridha** for *Assignment-1: Website Development Using Prompts — Educational Domain*.

## Tech stack

| Layer | Technology |
| --- | --- |
| Build tool | Vite 5 |
| UI library | React 18 |
| Routing | react-router-dom 6 (HashRouter) |
| Styling | Tailwind CSS 3 (custom emerald + slate theme) |
| Icons | Hand-written inline SVG set (no icon library) |

## Pages (11 + a 404 page)

1. **Home** — hero, quick links, about snippet, four commitments, schools, placement band, news, events, testimonials, CTA
2. **About** — history, vision/mission/values, milestone timeline, chairman and deans, key numbers
3. **Academics** — four schools, filterable programme table, academic model, academic calendar
4. **Admissions** — four-step process, eligibility, important dates, fee table, scholarships, enquiry form
5. **Faculty** — chairman and deans, department-filterable faculty directory, faculty development
6. **Campus Life** — facilities, student clubs, daily routine, welfare and safety
7. **Placements** — statistics, four-year training path, recruiters, notable offers, recruiter/student info
8. **Research** — research statistics, four centres, Ph.D. programme, funded projects
9. **News & Events** — news articles, notice board, subscribe box, upcoming events
10. **Gallery** — nine campus tiles with a lightbox
11. **Contact** — contact cards, enquiry form, campus map panel, department contacts

## Running the project

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

To generate a single self-contained `index.html` (everything inlined, easy to open by double-clicking):

```bash
SINGLE=1 npm run build   # output goes to dist-single/index.html
```

## Project structure

```
src/
  components/   Navbar, Footer, PageHeader, Section helpers, Logo, Icons
  data/site.js  All website content in one file — edit here to change the site
  pages/        One file per page
  index.css     Tailwind layers + reusable component classes
```

All site content (institute details, staff, programmes, fees, events) lives in `src/data/site.js`,
so text can be changed without touching any component.

## Identification

Website designed and developed by **Ridha** — the credit appears in the site footer, on the About page
and on the Contact page.
