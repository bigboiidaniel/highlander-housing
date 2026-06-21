# Highlander Housing Website

Full 11-page static website for Highlander Housing — the UCR student housing marketplace.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Homepage |
| `listings.html` | Available Listings |
| `subleases.html` | UCR Subleases |
| `roommates.html` | Roommate Finder |
| `parents.html` | For Parents Guide |
| `list-property.html` | Landlord Landing Page |
| `investors.html` | Investor Page |
| `housing.html` | UCR Housing Guide (SEO) |
| `resources.html` | Resources Hub |
| `about.html` | About Page |
| `contact.html` | Join/Contact Page |
| `preview.html` | **Self-contained preview — open this first** |
| `assets/style.css` | Full design system |
| `assets/site.js` | Nav, FAQ accordion, active states |
| `assets/logo.png` | Your actual logo (already copied here) |

## Before You Launch — 5 Things to Do

### 1. Add your Discord invite link
Every "Join Discord" button currently links to `contact.html` as a placeholder.
**Find and replace `href="contact.html"` with your actual Discord invite URL** in all files.
Or you can update `contact.html` to redirect to your Discord invite directly.

### 2. Connect your forms
The property submission form, investor form, and general contact form need a backend.
Recommended: [Formspree](https://formspree.io) — add `action="https://formspree.io/f/YOUR_ID"` to each `<form>`.

### 3. Add real testimonials
Search for `[PLACEHOLDER` in index.html — replace the 3 testimonial blocks with real quotes from actual students, parents, and landlords.

### 4. Update listings as inventory changes
Listings on `listings.html` and `subleases.html` are hardcoded. Update them as properties come and go.

### 5. Set up Google Analytics
Add your GA4 tracking snippet before `</head>` on all pages.

## SEO Meta Tags (already set)

| Page | Title Tag |
|------|-----------|
| Home | Highlander Housing — UCR Off-Campus Housing Marketplace |
| Listings | UCR Off-Campus Housing Listings \| Highlander Housing |
| Subleases | UCR Subleases \| Short-Term Housing Near UC Riverside |
| Roommates | Find Roommates Near UCR \| Highlander Housing |
| Parents | UCR Housing Guide for Parents \| Highlander Housing |
| List Property | List Your UCR Rental \| Reach 1,700+ Students |
| Investors | UCR Student Housing Investment \| Off-Market Deals |
| Housing Guide | UCR Off-Campus Housing Guide \| How Housing Works |
| Resources | UCR Housing Resources & Guides \| Highlander Housing |
| About | About Highlander Housing \| Founded by a UCR Graduate |
| Contact | Join Highlander Housing \| UCR Housing Community |

## Hosting Options

- **Netlify** (recommended): Drag-and-drop the folder to deploy instantly. Free tier works fine.
- **Vercel**: Same as Netlify, slightly more technical.
- **GitHub Pages**: Free, good if you're comfortable with git.
- **Squarespace/Webflow**: If you want a CMS later, you'd need to rebuild, but these are more manageable long-term.

## Design System

| Token | Value |
|-------|-------|
| Dark navy | `#0F172A` |
| Secondary navy | `#1E3A5F` |
| CTA blue | `#1D6DB5` |
| Gold accent | `#F59E0B` |
| Background | `#F7F9FC` |
| Display font | Plus Jakarta Sans (800, 700, 600) |
| Body font | Inter (400, 500) |

