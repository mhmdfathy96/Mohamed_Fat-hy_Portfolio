# SEO and GEO: defend the name, do not chase traffic

Decision record — 12 August 2026.
Extends `05_reposition_decision_record.md`; supersedes nothing.

This document exists so that nobody (including me, later) re-opens the
"shouldn't we do SEO?" question without knowing what evidence closed it.

---

## 1. The question that was asked

"What will my website show up for when people search?"

The useful answer turned out not to be a keyword list. It was a strategy
decision that had never been made explicitly.

---

## 2. What the evidence showed

### 2.1 The site did not own its own name

A search for `"Mohamed Fat-hy" software engineer` returned the LinkedIn profile
but **not fat-hy.com**, against a field of nine other software engineers of the
same name — including a competing developer portfolio at `mohamedfathy.dev`, a
Toptal profile, and several LinkedIn profiles.

The site spelled the name **only** as "Mohamed Fat-hy". `grep -rn "Fathy" src/`
returned nothing outside the LinkedIn and GitHub URL slugs. The site was
optimised for the one spelling searchers use least — the hyphen is invisible to
anyone who heard the name spoken rather than read it.

### 2.2 Almost nothing was indexed, and the cause was mechanical

Google Search Console, 12 August 2026:

| Metric | Value |
|---|---|
| Total web search clicks (3 months) | 0 |
| Indexed pages | 3 of 14 |
| Not-indexed reasons | `Page with redirect` × 1 |
| **Sitemaps submitted** | **0** |

A verified domain property had existed the whole time. **The sitemap had never
been submitted.** The 10 missing pages were not penalised, blocked or broken —
nothing had ever told Google they existed. The single "not indexed" page is the
retired `/build-with-me` stub, which is intentional.

### 2.3 The funnel does not use search for discovery

`05` §3 already established it: the site's job is **a credibility page — the
link you send to close a warm lead** — and work arrives through **Upwork and
referrals**, both warm. Search's only role in that funnel is **verification**:
a prospect meets Mohamed elsewhere, then looks him up to check he is real.

That is the moment §2.1 was losing.

---

## 3. The decision

**Defend the branded search. Do not chase discovery SEO.**

Generic commercial terms — "SaaS MVP developer", "Flutter developer", "hire
backend engineer", "AI chatbot development" — belong to Toptal, Clutch and
Upwork, who hold thousands of referring domains against this site's near-zero.
Ranking there would take a year of link building to win traffic that converts
worse than one Upwork invite. It is the wrong race.

The question is not "what will I rank for". It is **"what must I win"**:

1. **The name query** — because that is where the warm funnel passes through.
2. **The AI answer about the name** — because, in Mohamed's own words in `05`
   §3, "all clients now ask AI before they search for someone like me".

Both are winnable by a small site. Neither depends on domain authority the way
a commercial SERP does.

---

## 4. What changed

| Change | Why |
|---|---|
| `alternateName: ["Mohamed Fat-hy", "Mohamed Fathy", "Mohamed Fathi"]` on the Person schema | Resolve all three spellings to one entity. Confirmed read by Google's own parser in the Rich Results Test. |
| Route layouts carrying metadata for `/about`, `/services`, `/contact` | All three inherited the site default, so the commercial page was indistinguishable from the home page in results. They are client components and cannot export metadata directly. |
| Generated 1200×630 OG card (`src/app/opengraph-image.tsx`) | Replaced a 1792×2390, 7.6MB portrait that letterboxed and was heavy enough that scrapers skipped it. For a page whose job is "the link you send", the preview *is* the first impression. |
| `vercel.json` forcing `Content-Type: image/png` | Static export emits the card extensionless; Vercel served it as `application/octet-stream`, which strict scrapers discard. `output: "export"` ignores the `next.config` headers hook. |
| `founder` / `knowsLanguage` replacing `provider` / `availableLanguage` | `ProfessionalService` is a `LocalBusiness` and so an Organization, not a Service. Three validator warnings, all pre-existing. |
| `image` → `/assets/headshot.jpg` (899×1200, ~190KB) on both nodes | Was the same 7.6MB file. Nothing else on the site rendered it. |
| Sitemap submitted to Search Console | The single highest-impact action taken. Success, 14 pages discovered. |

---

## 5. What was deliberately NOT done

Do not "fix" these later by reading the same tool reports.

- **`priceRange`, `telephone`, `address`** on the business schema. Rich Results
  Test lists all three as missing optional fields. No price is published (`05`
  §3), there is no phone line, and there is no street address for a remote
  practice serving the ten markets in `areaServed`.
- **An Upwork backlink.** Upwork's terms restrict off-platform links in public
  profiles, any link would be `nofollow` behind a partial login wall, and it
  risks a Top Rated account for no measurable gain.
- **Blogging, keyword pages, link-building campaigns.** See §3.
- **Expecting FAQ rich results.** The FAQPage schema is valid and is read, but
  Google retired FAQ rich results for general sites in 2023. It earns its keep
  in the machine layer, not in the SERP.

---

## 6. Verified, not assumed

Checked live on 12 August 2026 after deploy:

- `alternateName` — all three values parsed by Google's Rich Results Test
- Schema validator — Person 0 errors, FAQPage 0 errors / 0 warnings, the three
  ProfessionalService warnings resolved
- Rich Results Test — 2 valid items, crawled successfully
- `curl -sI https://fat-hy.com/opengraph-image` → `image/png`
- LinkedIn Post Inspector — card renders, re-scraped
- Facebook Sharing Debugger — 206, preview renders (the `fb:app_id` warning is
  irrelevant without a Meta app and does not affect previews)

---

## 7. Open items

- **agentech.tech does not link to fat-hy.com.** Its rendered HTML links out to
  LinkedIn, Upwork and Facebook only. It is a controlled, topically adjacent
  domain and the easiest relevant backlink available. Lives in another repo.
**Closed 12 August 2026:**

- ~~The GitHub bio contradicts the positioning.~~ It read "Flutter | Mobile &
  Backend-Oriented" with no mention of AI, while LinkedIn and Upwork both led
  with it — a contradiction inside the `sameAs` set, which is what Google and
  LLMs read to decide what Mohamed does. Now reads "Software Engineer |
  Generative AI, RAG & LLM integration | SaaS MVPs | Spring Boot · Flutter ·
  Next.js | Top Rated @ Upwork", and the `blog` field already pointed at
  fat-hy.com. All three profiles now agree, and all three lead with AI.

---

## 8. Rule for future edits

The machine layer (JSON-LD, `llms.txt`) is the retrieval surface and is already
strong; grow it freely. The visible copy stays Layer 1 per `05` §4 — **do not
promote keywords into the hero to chase a search term.** The win condition for
this site is that someone searching Mohamed's name finds *him*, not one of the
nine other Mohamed Fathys. Traffic volume is not the metric.
