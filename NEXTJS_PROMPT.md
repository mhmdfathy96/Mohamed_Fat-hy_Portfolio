You are implementing a portfolio website using Next.js and Tailwind CSS.

IMPORTANT:
You are NOT responsible for UI/UX design decisions.
You must follow an existing clean developer portfolio template style.

Do not invent layouts.

---

## Framework

- Next.js (App Router)
- Tailwind CSS
- Static generation
- SEO metadata support

---

## UI Guidelines

- Clean developer portfolio layout
- Card-based project section
- Clear typography hierarchy
- Consistent spacing
- Minimal animations only

Think: senior software engineer portfolio.

---

## Data-Driven Architecture

All content must come from JSON files.

Do NOT hardcode text.

Use:

- data/profile.json
- data/projects.json

---

## Pages

### Home Page

- Hero section
- About section
- Skills
- Featured projects
- Contact

### Projects Page

- All projects list

### Project Details Page

Route:
/projects/[slug]

Each project page must:

- Read data from JSON
- Render project content
- Inject SEO title & meta description dynamically

---

## SEO Requirements

- Homepage SEO metadata
- Projects page SEO metadata
- Each project page uses SEO from JSON
- Use Next.js metadata API

---

## Rules

- No redesign
- No UI experimentation
- No creative layout changes
- Follow standard developer portfolio structure

---

## Final Objective

The portfolio must:

- Look clean and professional
- Be easy to maintain
- Be SEO-ready
- Require zero frontend knowledge from the owner
