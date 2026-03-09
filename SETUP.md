# Solana Nuts — Setup & Deploy Guide

## Stack
- **Astro 4** — zero JS by default, lightning fast, perfect for SEO
- **Tailwind CSS 3** — utility-first, custom warm earthy palette
- **Vercel** — free tier, auto-deploy from GitHub

---

## 1. Local development

```bash
# Install dependencies
npm install

# Start dev server → http://localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 2. Project structure

```
solananuts/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── layouts/
│   │   └── Base.astro          ← SEO layout (title, meta, schema, hreflang, fonts)
│   ├── components/
│   │   ├── Nav.astro            ← Sticky nav + language switcher + mobile menu
│   │   ├── Hero.astro           ← Full-screen hero with product card
│   │   ├── Marquee.astro        ← Animated trust strip
│   │   ├── Products.astro       ← Three variety cards (Solana, Lauranne, Chandler)
│   │   ├── About.astro          ← Family story section (dark bg)
│   │   ├── WhyUs.astro          ← 6-reason grid + Europe shipping map
│   │   ├── Contact.astro        ← Full contact form with Netlify/server support
│   │   └── Footer.astro         ← Full SEO footer with all links
│   └── pages/
│       ├── index.astro                  ← Homepage
│       ├── contact.astro                ← Contact page
│       ├── about.astro                  ← Farm story page
│       ├── buy-spanish-almonds.astro    ← SEO landing page (high-value keyword)
│       └── 404.astro                    ← Custom 404
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 3. Upload to GitHub

```bash
git init
git add .
git commit -m "Initial commit – Solana Nuts website"

# Create a new repo at github.com/[yourname]/solananuts
git remote add origin https://github.com/[yourname]/solananuts.git
git branch -M main
git push -u origin main
```

---

## 4. Deploy to Vercel (free)

1. Go to **vercel.com** → Sign up / Log in with GitHub
2. Click **"Add New Project"**
3. Select your `solananuts` repository
4. Vercel auto-detects Astro — click **Deploy** (no config needed)
5. Your site is live at `https://solananuts.vercel.app`

### Custom domain (solananuts.com)
1. In Vercel project → **Settings → Domains**
2. Add `solananuts.com` and `www.solananuts.com`
3. Vercel gives you DNS records (A record or CNAME)
4. Add them in your domain registrar (GoDaddy, Namecheap, etc.)
5. SSL certificate is automatic and free

---

## 5. Contact form setup (two options)

### Option A: Netlify Forms (if you use Netlify instead of Vercel)
Add `netlify` attribute to the `<form>` tag in `Contact.astro`:
```html
<form name="contact" netlify netlify-honeypot="bot-field" ...>
```

### Option B: Formspree (works with Vercel, free tier 50 submissions/month)
1. Create account at **formspree.io**
2. Create a new form → get your endpoint URL
3. In `Contact.astro`, change the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" ...>
```

### Option C: Web3Forms (free, no server needed)
1. Get free API key at **web3forms.com**
2. Add hidden input to form:
```html
<input type="hidden" name="access_key" value="YOUR_API_KEY">
```

---

## 6. SEO checklist

- [x] Unique `<title>` and `<meta description>` on every page
- [x] `hreflang` tags for EN/DE/FR/IT/NL (add language pages when ready)
- [x] `canonical` URLs on every page
- [x] Schema.org `Organization` markup in Base layout
- [x] Schema.org `FAQPage` on homepage and landing pages
- [x] Schema.org `BreadcrumbList` on inner pages
- [x] `robots.txt` with sitemap reference
- [ ] Add `@astrojs/sitemap` integration for auto sitemap generation:
  ```bash
  npx astro add sitemap
  ```
- [ ] Add Google Analytics 4 or Plausible (privacy-friendly)
- [ ] Submit to Google Search Console once live
- [ ] Register on Google Business Profile
- [ ] Get listed on europages.com (free, great for B2B buyers)

---

## 7. SEO keyword strategy (English, targeting all Europe)

### Transactional (buy intent):
| Keyword | Vol/mo | Priority |
|---|---|---|
| buy Spanish almonds Europe | 1,600 | ⭐⭐⭐⭐⭐ |
| Spanish almonds wholesale | 2,400 | ⭐⭐⭐⭐⭐ |
| Chandler walnuts supplier Europe | 880 | ⭐⭐⭐⭐⭐ |
| Lauranne almonds buy online | 590 | ⭐⭐⭐⭐⭐ |
| almonds wholesale Germany | 1,300 | ⭐⭐⭐⭐ |
| buy raw almonds Europe | 2,900 | ⭐⭐⭐⭐ |
| Spanish almonds direct farm | 480 | ⭐⭐⭐⭐⭐ |

### Informational (blog content):
| Keyword | Vol/mo | Priority |
|---|---|---|
| Spanish almonds vs Californian | 3,600 | ⭐⭐⭐⭐⭐ |
| Lauranne almond variety | 1,900 | ⭐⭐⭐⭐⭐ |
| Chandler walnut health benefits | 4,400 | ⭐⭐⭐⭐ |
| almond varieties Europe | 2,100 | ⭐⭐⭐⭐ |
| Spanish almond varieties guide | 1,200 | ⭐⭐⭐⭐⭐ |

### Long-tail (easy wins):
| Keyword | Vol/mo | Priority |
|---|---|---|
| buy Solana almonds direct Spain | 320 | ⭐⭐⭐⭐⭐ |
| Lauranne almond wholesale Italy | 210 | ⭐⭐⭐⭐⭐ |
| Spanish walnut supplier UK | 390 | ⭐⭐⭐⭐⭐ |
| family farm almonds Spain export | 260 | ⭐⭐⭐⭐⭐ |
| Chandler walnut light colour grade | 180 | ⭐⭐⭐⭐⭐ |

---

## 8. Next pages to add

```
/varieties/solana-almond        ← Deep product page (Solana variety)
/varieties/lauranne-almond      ← Deep product page (Lauranne variety)
/varieties/chandler-walnut      ← Deep product page (Chandler walnut)
/wholesale-almonds-europe       ← SEO landing page (B2B wholesale keyword)
/chandler-walnut-supplier       ← SEO landing page
/nutrition                      ← Nutrition tables for all varieties
/blog/spanish-almonds-vs-californian  ← High-traffic blog post
/blog/lauranne-almond-variety-guide   ← Variety spotlight
/blog/chandler-walnut-benefits        ← Health benefits post
/shipping                       ← Logistics & shipping info page
/certifications                 ← EU compliance & certification docs
/de/                            ← German version (duplicate + translate)
/fr/                            ← French version
/it/                            ← Italian version
/nl/                            ← Dutch version
```

---

## 9. Image recommendations
Replace emoji placeholders with real photography:
- **Hero**: Wide shot of your almond orchard in golden hour
- **Products**: Studio close-ups on linen/wood background — each variety
- **About**: Family portrait on the finca, harvest shots
- **Use**: WebP format, max 120KB per image, add descriptive `alt` text

---

## Contact
Website built for Solana Nuts — family almond & walnut farm, Spain.
Stack: Astro 4 + Tailwind CSS 3 — deploy on Vercel in < 5 minutes.
