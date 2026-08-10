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

- [ ] **Telegram now points at the bot `@fathywebsitebot`** instead of the
      personal account — 11 August 2026, at Mohamed's request. Needs a live
      check that messages sent to the bot actually reach him.
- [ ] **Calendly link is unverified.**
- [x] **Formspree endpoint confirmed** — 11 August 2026. Mohamed submitted the
      live form and the message arrived. `_unverified` key removed.
- [ ] **OG image is a portrait crop** and will letterbox. A purpose-made
      1200×630 card would be better. `TODO` left in `layout.tsx`.
- [ ] **Mobile layout not visually verified** — the tooling could not reach
      either the Mobile Simulator extension or DevTools device mode, and
      resizing the browser window is prohibited.
- [ ] **Watch the Microsoft Clarity session recordings.** With 11 users, every
      session can be watched in about 15 minutes. That is real data; everything
      in §2.2 above is inference from aggregate counts. **Anything the
      recordings contradict overrides this document.**
      Clarity **is** installed and recording — verified 11 August 2026 in
      `/_next/static/chunks/`. Note for anyone re-checking: it will never
      appear in the served HTML, because `MicrosoftClarity` renders an *inline*
      `<Script>` that next/script injects only after hydration. GA is visible
      in the HTML solely because it has an external `src`. Grepping the page
      source is not a valid test; grep the JS chunks.

---

## 6a. Correction — the delivery claims understated the record

Added 11 August 2026, after Mohamed challenged the numbers.

**The error.** `hero.proof` claimed *"8 products launched · 5 countries"*.
Both figures were computed from `projects.json`, which holds only the eight
documented case studies — so the site was quietly reporting its own content
inventory as though it were Mohamed's career. `structuredData.ts` derived
`areaServed` the same way and inherited the same undercount. Meanwhile
agentech.tech advertised *15+ projects, 10+ countries, 70K+ downloads* for the
same person. Two of his own sites disagreed about him, and a prospect who
opened both would have seen it.

**Confirmed footprint** (from Mohamed, 11 August 2026): Egypt, Saudi Arabia,
UAE, Qatar, Iraq, Kyrgyzstan, South Korea, Nigeria, USA, EU. Now stored in
`profile.markets` as the single source of truth. Uzbekistan and Russia were
*inferred from testimonial author names and are wrong* — do not reintroduce
them. The EU is a bloc: the honest phrasing is **"10 markets"**, never
"10 countries", and the JSON-LD types it `AdministrativeArea`.

**On "15+ projects".** True and defensible: the balance are MVPs that never
reached market, proofs of concept, and private commercial work under
confidentiality. It sits in `llms.txt` with that explanation attached, not in
the hero — see below.

**What now leads instead.** Neither count. Mohamed asked not to open with
project volume or download numbers, and he is right to: volume is a vanity
axis, and for a *warm* visitor the live question is "will this go wrong for
me?" Repeat business answers exactly that, and it is the one claim a
competitor cannot copy. `testimonials.json` already evidenced it and nothing
on the site said so — two clients appear twice, one opening *"I had the
pleasure of working with Mohamed before, and thrilled to collaborate with him
again!"* Hence the new strip: **"Clients who come back · 10 markets, 4
continents · 5+ years building software."**

The 50,000+ Android installs on 3arabawy are real and now recorded in
`llms.txt`, where the machine layer can use them without the page opening on a
number.

**Now surfaced on the page.** `repeatClient` was added to `Testimonial` and set
on all four testimonials by the two returning clients (Mokhirukh Eshankhanova,
Bolarinwa Oladayo). Each renders a *"Returning client — hired me more than
once"* badge, and the testimonials section leads with a line counted from the
data — `2 of these clients came back and hired me for another project` —
derived rather than hardcoded so it cannot go stale when testimonials change.

Incidental fix found while doing it: `Testimonial.role` was typed as a
required `string`, but no testimonial in the data has ever had one. The
`as Testimonial[]` cast in `page.tsx` suppressed the error, and every card was
rendering an empty `<p>` under the name. `role` is now optional and the
element is conditional.

---

## 6b. The proof did not match what is being sold

Raised by Mohamed, same session: *"are we forgetting the SaaS and AI work?"*
He was right, and it was measurable.

| Proof surface | SaaS / AI / backend | Mobile |
|---|---|---|
| Technical highlights | **0 of 7** | 7 of 7 |
| Testimonials | **0 of 8** | 8 of 8 |
| Featured projects | 2 of 4 | 2 of 4 |

`/services` sells *"Adding AI to what you already have"* and *"Make It Handle
More Users"*. Neither had a single piece of technical evidence anywhere on the
site. A visitor weighing the proof concluded **Flutter developer** — a
lower-priced category than what the packages describe. The repeat-client badges
added earlier in this session made that *worse*, because all four sit on
mobile testimonials.

**Fixed for highlights.** Two entries written from material already sitting
unused in `projects.json`, both from Agentech Assistant: *Three-Layer Tenant
Isolation* (application context + PostgreSQL RLS + Qdrant payload filtering,
so no single missed check can leak across tenants) and *Grounded Answers with
Citations* (retrieval constrained to tenant content, 80% of tier-1 tickets
deflected, every reply cited). Ordering matters and is documented in
`highlights.json._ordering`: the home page renders only the first two featured
entries, which are now deliberately one backend/AI and one mobile.

**On the testimonials, an earlier claim in this session was overstated and is
withdrawn.** It was argued that Flutter-worded testimonials actively undercut
the SaaS/AI positioning. Mohamed disagreed, and he is right: what those
clients actually praise is reliability, communication, anticipating problems,
and integrity — none of which is category-bound, and none of which a
non-technical buyer reads as a limit. The word "Flutter" narrows the read only
for a technical vetter, who is not the buyer this page is written for. Fresh
testimonials naming platform or AI work would still help, but this is a
nice-to-have, not the defect it was described as.

---

## 6c. Deliberate reorientation toward AI

Decision by Mohamed, 11 August 2026: point the practice at AI-integrated SaaS.
*"What is wrong with orienting my career towards AI? I need to hook them, AI
is now very rich."*

Nothing is wrong with it, and the site was actively obstructing it. The
`<title>` and OG title read *"Apps, backends, and the systems behind them"* —
neither "AI" nor "SaaS" appeared in the single most heavily weighted tag on
the page. `hero.gloss`, the Layer 2 line whose entire job is carrying industry
vocabulary, listed "MVP, backend, full-stack build" and omitted both.

The claim is also honestly supported, which is what separates it from most AI
positioning: Agentech Assistant is production multi-tenant RAG with
database-level and vector-level isolation and citation-grounded answers, and
3arabawy and GuruHub carry AI features too. The differentiator to press is not
"builds AI" — everyone says that — but that the AI arrives *inside a finished
product*, because the same person builds the app, the backend and the admin
around it.

Changed: titles and OG titles now lead with SaaS MVPs and AI features;
`hero.gloss` names SaaS and AI; `hero.tech` adds Node.js and Firebase;
`knowsAbout` grew 29 → 43 terms and is **reordered so AI and SaaS lead**,
since consumers truncate the list; `llms.txt` gained a "current direction"
paragraph and an AI-first stack section.

Rule for future edits: an entry may only be added to `knowsAbout` if it has
actually shipped. The list is a retrieval surface, not a wish list, and the
first technical call exposes anything padded.

### Breadth belongs in the machine layer, not on the page

Mohamed pushed back on listing every technology — *"do I need to add all techs,
programming languages and frameworks? I don't think so"* — and the answer is
no, but it differs by surface, which is a fourth rule sitting alongside the
three copy layers in §4:

| Surface | Rule | Why |
|---|---|---|
| Visible copy (`hero.tech`) | **Short. Only what he wants to be hired for.** | A long list reads junior, and it dissolves the AI direction into one item among many |
| Machine layer (`knowsAbout`, `llms.txt`) | **Broad.** | Pure retrieval matching. No human judges the length, and a term that is absent cannot match a query |

`hero.tech` was accordingly cut from 8 items to 5 and reordered AI-first:
`AI, RAG & LLM integration · Spring Boot · Flutter · Next.js · PostgreSQL`.
Node.js, .NET, Firebase, SQL and NoSQL remain in `knowsAbout` (43 terms) and
`llms.txt`, so nothing became unfindable — it stopped being *advertised*.

Note this reverses an edit made earlier in the same session, which had grown
`hero.tech` to eight items immediately after deciding to specialise. Adding
breadth to visible copy and adding it to the machine layer are not the same
move, and conflating them works against the positioning.

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
