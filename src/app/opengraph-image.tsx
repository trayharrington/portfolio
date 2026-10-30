import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Traylon Harrington: Full-stack engineer building tools that take the friction out of people’s work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const headshot = await readFile(join(process.cwd(), "public/headshot.jpg"));
  const headshotSrc = `data:image/jpeg;base64,${headshot.toString("base64")}`;
  // Passing any font replaces the renderer's built-in one, so load both weights we use
  const geistRegular = await readFile(join(process.cwd(), "src/assets/fonts/Geist-Regular.ttf"));
  const geistBold = await readFile(join(process.cwd(), "src/assets/fonts/Geist-Bold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 96,
          background: "#ffffff",
          color: "#171717",
        }}
      >
        <img src={headshotSrc} alt="" width={280} height={280} style={{ borderRadius: 9999 }} />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>Traylon Harrington</div>
          <div style={{ fontSize: 34, color: "#52525b", marginTop: 20, lineHeight: 1.3 }}>
            Full-stack engineer building tools that take the friction out of people’s work.
          </div>
          <div style={{ fontSize: 28, marginTop: 40 }}>traylonharrington.com</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: geistBold, weight: 700, style: "normal" },
      ],
    },
  );
}
