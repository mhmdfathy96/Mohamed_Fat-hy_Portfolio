# Reposition: from lead-gen funnel to credibility page

Decision record — 10 August 2026.
Supersedes `01_build_with_me_page.md` and `02_navigation_updates.md`.

This document exists so that nobody (including me, later) re-litigates these
decisions without knowing what evidence produced them.

---

## 1. What was complained about

Three separate complaints arrived at once.

**From the analytics.** Visits were happening; nobody was making contact.

**From a paying client** — one who found Mohamed through relatives, not through
the site:

- the site "is not understandable for clients"
- she read **"ship production-ready SaaS MVPs"** and asked what happens if a
  client has no products to ship — she read *ship* as physical shipping
- she asked what the **packaging** was: what does she actually buy?

**From Mohamed himself.**

- the dark theme and purple colours felt wrong; he wanted something lighter
- pricing had been raised and dropped twice before without resolution
- "no one talks to me at all, even though there are visits"
- and the honest framing: no ads, no social presence driving any of it

---

## 2. What the evidence actually showed

### 2.1 Traffic

Google Analytics, 21 July – 10 August 2026 (20 days):

| Metric | Value |
|---|---|
| Active users | 11 |
| New users | 9 |
| Average engagement time | 42s |
| Event count | 98 |

Top pages: home 24 views / 7 users (53.8% bounce), `/projects` 2 views,
everything else 0–1. **`/services`, `/build-with-me` and `/contact` did not
appear in the report at all.**

**The primary finding: the site had not failed to convert — it had never been
tested.** At a strong B2B service conversion rate of 3–5%, 11 visitors
mathematically yields 0.3–0.5 enquiries. Receiving zero was the expected
outcome. No copy change is measurable at this sample size.

**Distribution is the bottleneck, not the page.** That is a separate problem
and this work does not solve it.

### 2.2 The funnel was structurally broken anyway

- The entire commercial offer lived on `/build-with-me`, two clicks deep.
  **Zero recorded visits, ever.**
- Four competing calls to action above the fold: a nav "Build Your MVP" button
  plus three hero buttons ("Build Your MVP", "Services", "See Projects").
- 42s of engagement means the hero and perhaps one scroll. The hero opened with
  a name and a job title — no statement of what the visitor gets.

### 2.3 A wrong inference, corrected

The first reading of the client's feedback was that she represented a **local
Egyptian SMB market**, and that the site should be rewritten for local clients.

**That was wrong, and the repo disproved it.** Project markets:

| Project | Market |
|---|---|
| GuruHub | Global |
| Agentech | Global |
| MDone | Iraq |
| Toltura | Kyrgyzstan |
| BizNavi | South Korea |
| Party Player | USA |
| 3arabawy | Egypt |
| Installment App | Egypt |

Six of eight are international; testimonials span Uzbek, Russian, Saudi,
Nigerian and Egyptian names. Generalising one relative-referred client into an
entire market was an error from a sample of one.

**The correct reading:** her problem was not that she is local — it is that she
is **non-technical**. And that makes the copy problem *worse*, not better,
because the real buyers are in Kyrgyzstan, Iraq, South Korea and Nigeria and
are mostly reading **English as a second language**. Dense startup English is
exactly the wrong register for them.

### 2.4 Two things Mohamed believed that were not true

**"My site is dark."** It was not. `globals.css` defined a light palette and
flipped it under `@media (prefers-color-scheme: dark)` with **no toggle**. He
was not choosing dark — every visitor with a dark-set OS saw a theme that had
never been designed or reviewed. The purple was real: an indigo→purple gradient
on every button, the nav CTA, and gradient-text headings.

**The pricing question was unanswerable as posed.** `$5,000` was
*simultaneously* too frightening for a referred smaller client and too cheap an
anchor for an international founder. One number cannot serve both. The question
could not resolve until the site's audience was decided — which is why it kept
coming back.

---

## 3. Decisions taken

Answered by Mohamed directly:

| Question | Decision |
|---|---|
| What is this site's job, now that agentech.tech exists? | **A credibility page** — the link you send to close a warm lead |
| Where does work actually come from? | **Upwork and referrals** (both warm — nobody discovers him here) |
| Whose vocabulary wins? | **Both** — see §4, this was the hard one |
| Pricing | **No number**; explain how pricing works instead |
| Visual direction | **Light-only, drop the purple**; accent `#1D4ED8` (blue-700) |
| Canonical domain | `https://fat-hy.com` |
| OG image | Reuse existing `personal-image.png` for now |

### The audience answer, in his words

> "I need to keep both — technical terms, because all clients now ask AI before
> they search for someone like me, and of course AI will tell them to search
> with those terms. And on the other hand, as my current client says, what if
> someone non-technical, how do they know these terms?"

This is not indecision. It is a correct observation about how buyers now
behave, and it has a clean solution rather than a compromise.

---

## 4. The three-layer copy strategy

The spine of every copy decision in this change.

| Layer | Reader | Rule | Lives in |
|---|---|---|---|
| **1 — Plain** | Non-technical, ESL, 42 seconds | Short sentences. No `MVP`, `production-ready`, `architecture`, `accountable lead`, `scalable` | Hero, packages, services, FAQ |
| **2 — Glossed** | Both at once | Name the term *attached to* its plain meaning: "Also called: MVP, minimum viable product" | `alsoCalled` fields, `hero.gloss` |
| **3 — Machine** | LLMs, search, technical vetters | Full technical vocabulary | JSON-LD, `llms.txt`, project pages, hero tech strip |

Layer 1 fixes the client's misreading. Layers 2 and 3 fix the AI-discovery
problem — and fix it *better than before*, because the machine layer previously
did not exist at all: no JSON-LD, no OpenGraph, no sitemap, no robots.txt.

**Rule for future edits:** never promote Layer 3 vocabulary into a Layer 1
field. Each data file carries a `_copyLayers` note stating this.

---

## 5. What changed

### Copy and structure

- **`src/components/Hero.tsx`, `src/data/profile.json`** — new hook. Was: name,
  job title, then "I help founders ship production-ready SaaS MVPs in 6–8 weeks
  — mobile, backend, and architecture under one accountable lead." Now: *"I
  build apps and the systems that run them."* Countries named explicitly (an
  Iraqi or Kyrgyz visitor seeing their own market is the strongest available
  trust signal, and it was invisible before). Four CTAs cut to two.
- **`src/data/packages.json`, `src/components/PackagesSection.tsx`** — new.
  Replaces "Phase 1 — MVP Foundation / Phase 2 — Growth & Scale", which named
  *stages of the process* rather than things a person can buy. Now four named
  purchases, each stating what you receive and how long it takes.
- **Scoping Week** — new, and the single most important structural addition. A
  small paid first step. Previously the only door was a 6–8 week commitment,
  which is an enormous ask for a warm-but-unsure lead. Fee is credited against
  the first stage; the plan is portable to any developer.
- **`src/data/services.json`, `src/data/faq.json`** — rewritten in Layer 1/2
  language; FAQ gained "I am not technical. Is that a problem?"

### Pricing

`$5,000` removed. `build_with_me_pricing.json` deleted. Replaced by a "How I
price" block: staged fixed prices agreed before each stage, no full payment
upfront, code and IP in the client's account from day one, and the Scoping Week
named as the way to find the real number.

### Pages

`/build-with-me` retired — a full landing page with its own hero, stats,
agenda, FAQ and pricing that was never once visited. Its packages, process and
FAQ moved to `/services`; the packages block also sits on the home page, where
the traffic actually is. The route survives as a redirect stub because the
`/bwm` short link may have been shared, and because `output: "export"` ignores
`next.config` redirects. Five `build_with_me_*.json` files deleted.

Nav: "Build Your MVP" → "Talk to me" (pointing at a page that exists).
"Contact" removed from the nav links, since the button already goes there —
two links to one page split the clicks.

### Theme

`@media (prefers-color-scheme: dark)` removed from `globals.css`; `color-scheme:
light` set explicitly. **380 `dark:` class variants stripped across 20 files**,
plus 6 more inside template literals by hand. **64 accent replacements** turned
every indigo→purple gradient into flat `blue-700`, with colour-only hovers
instead of scale-and-shadow. Decorative purple blur glows removed.

Incidental fix: `body` was setting `font-family: Arial, Helvetica, sans-serif`,
overriding the Geist font the app loads and pays for. Now uses Geist.

### Machine layer (all new)

- `metadataBase`, OpenGraph and Twitter card tags — pasting the link into
  WhatsApp, Upwork or LinkedIn previously produced a **blank preview**, on a
  site whose entire job is being a link you send
- `src/lib/structuredData.ts` — JSON-LD `Person` + `ProfessionalService` +
  `FAQPage`, with 29 `knowsAbout` entries, `areaServed` derived from real
  project markets, and the packages as an `OfferCatalog`
- `src/app/sitemap.ts`, `src/app/robots.ts` — both static-export compatible
- `public/llms.txt` — plain-text brief for AI crawlers

---

## 6. Open items

- [ ] **Telegram handle and Calendly link are unverified.** Flagged in
      `contact_channels.json` under `_unverified`.
- [ ] **Formspree endpoint has never been confirmed to deliver.** Flagged in
      `contact_form.json`. A silently broken form is the most expensive
      possible bug on a credibility page.
- [ ] **OG image is a portrait crop** and will letterbox. A purpose-made
      1200×630 card would be better. `TODO` left in `layout.tsx`.
- [ ] **Mobile layout not visually verified** — the tooling could not reach
      either the Mobile Simulator extension or DevTools device mode, and
      resizing the browser window is prohibited.
- [ ] **Watch the Microsoft Clarity session recordings.** With 11 users, every
      session can be watched in about 15 minutes. That is real data; everything
      in §2.2 above is inference from aggregate counts. **Anything the
      recordings contradict overrides this document.**

---

## 7. How to judge this work

**Not by lead count.** At 11 visitors per 20 days, no page change is
statistically measurable, and treating enquiries as the scoreboard will produce
a false conclusion in either direction.

Judge it on:

1. **Comprehension** — send the site to the same client and ask her to explain,
   in her own words, what Mohamed does. That is the test this work was built to
   pass.
2. **Link previews** — paste the URL into WhatsApp and confirm a real card.
3. **Technical vetting** — the stack and project detail still hold up.
4. **AI answers** — ask ChatGPT or Claude about "Mohamed Fat-hy fat-hy.com" a
   few weeks after deploy and see what it says.

Lead volume is a distribution problem. It is the next conversation, and it is a
bigger one than this.
