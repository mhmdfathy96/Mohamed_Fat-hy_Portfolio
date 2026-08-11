import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import profile from "@/data/profile.json";

/*
 * The link preview card.
 *
 * This matters more here than on most sites. The decision record
 * (docs/05_reposition_decision_record.md §3) sets this site's job as "a
 * credibility page — the link you send to close a warm lead", and the link is
 * sent through WhatsApp, Telegram, Upwork and email. In those channels the
 * preview card IS the first impression, seen before the site itself.
 *
 * What it replaced: /assets/personal-image.png, a 1792x2390 portrait weighing
 * 7.6MB. Wrong shape, so it letterboxed; and far too heavy, so scrapers with a
 * fetch budget skipped it and rendered the link as bare text.
 *
 * Design follows globals.css rather than inventing a second visual language:
 * white ground, slate-900 text, slate-600 body, one flat blue-700 accent. No
 * gradients — those were deliberately removed from the site.
 */

export const runtime = "nodejs";
export const dynamic = "force-static";

export const alt = `${profile.name} — ${profile.title}, ${profile.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Mirrors globals.css :root.
const ACCENT = "#1d4ed8";
const FOREGROUND = "#0f172a";
const MUTED = "#475569";

export default async function OpenGraphImage() {
  const dir = join(process.cwd(), "src/assets/og");
  const [regular, bold, portrait] = await Promise.all([
    readFile(join(dir, "Geist-Regular.ttf")),
    readFile(join(dir, "Geist-Bold.ttf")),
    readFile(join(dir, "portrait.jpg")),
  ]);

  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          fontFamily: "Geist",
        }}
      >
        {/* Flat accent edge — the one accent, used flat. */}
        <div style={{ display: "flex", width: 12, backgroundColor: ACCENT }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "0 64px",
          }}
        >
          <div
            style={{
              fontSize: 21,
              fontWeight: 700,
              letterSpacing: 3,
              color: ACCENT,
            }}
          >
            {profile.title.toUpperCase()}
          </div>

          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: FOREGROUND,
              marginTop: 14,
              letterSpacing: -1.5,
            }}
          >
            {profile.name}
          </div>

          {/* Layer 1 copy: the plain sentence, readable by a non-technical,
              non-native English reader in one pass. */}
          <div
            style={{
              fontSize: 32,
              color: MUTED,
              marginTop: 18,
              lineHeight: 1.35,
              // Tuned to break as "…and the systems / that run them." rather
              // than orphaning "them." on its own line.
              maxWidth: 470,
            }}
          >
            {profile.hero.headline}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 34,
              fontSize: 22,
              color: FOREGROUND,
            }}
          >
            <span>10 markets</span>
            <span style={{ color: "#cbd5e1", padding: "0 12px" }}>·</span>
            <span>4 continents</span>
            <span style={{ color: "#cbd5e1", padding: "0 12px" }}>·</span>
            <span>5+ years</span>
          </div>

          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: ACCENT,
              marginTop: 30,
            }}
          >
            fat-hy.com
          </div>
        </div>

        <img
          src={portraitSrc}
          width={430}
          height={630}
          style={{ objectFit: "cover", objectPosition: "top" }}
          alt=""
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
