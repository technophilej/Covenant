# Covenant Care Services Website

A modern, responsive 4-page healthcare website for **Covenant Care Services LLC** — a Maine-based Personal Care Agency. Built with Next.js (App Router), React 19, Tailwind CSS, and Framer Motion.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/contact` | Contact Us + Careers (tabbed) |
| `/request-care` | Request Care Services / Client Intake |

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS** with custom brand color palette
- **Framer Motion 11** — form transition animations
- **Lucide React** — icons
- **Radix UI** — accessible label and button primitives
- **ESLint 9** (flat config)

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
app/
├── layout.jsx                  # Root layout + Google Fonts
├── globals.css                 # Tailwind base + brand animations + a11y
├── page.jsx                    # Home (/)
├── services/page.jsx           # Services (/services)
├── contact/page.jsx            # Contact + Careers (/contact)
└── request-care/page.jsx       # Client intake (/request-care)

components/
├── layout/
│   ├── Layout.jsx              # Skip-to-content + nav + footer wrapper
│   ├── Navigation.jsx          # Two-tier sticky nav
│   └── Footer.jsx
├── home/
│   └── HeroSection.jsx         # Full-width hero with image overlay
├── contact/
│   ├── ContactForm.jsx         # Contact message form
│   └── ApplicationForm.jsx     # Career application + resume upload
├── request-services/
│   └── ClientIntakeUploadForm.jsx
├── ui/
│   ├── Reveal.jsx              # Scroll-triggered reveal wrapper
│   ├── button.jsx
│   ├── input.jsx
│   ├── label.jsx
│   └── textarea.jsx
└── lib/utils.js                # cn() helper

hooks/
└── useInView.js                # IntersectionObserver hook for Reveal

public/
├── images/                     # Logo, hero photo
└── forms/                      # Downloadable PDF forms
```

## Accessibility

- Skip-to-content keyboard link
- ARIA landmarks (`nav`, `main`, `footer`)
- Full ARIA tab pattern on Contact page
- `prefers-reduced-motion` support (all animations off)
- Visible focus rings (`focus-visible`)
- Semantic HTML — `ul/li`, `ol/li`, heading hierarchy
- Descriptive alt text on all images; decorative elements `aria-hidden`
- All form inputs have matching label/id pairs; file inputs have `aria-label`

## Contact

- **Phone**: (207) 252-8470
- **Email**: contact@covenantcareservices.org
- **Address**: 40 Gina Street, Lewiston, ME 04240
