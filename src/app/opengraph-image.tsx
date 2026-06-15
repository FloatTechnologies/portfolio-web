import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { siteDescription, siteTitle } from "@/lib/seo";

export const alt = siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background:
            "linear-gradient(145deg, #06080f 0%, #0f172a 45%, #1e293b 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#60a5fa",
          }}
        >
          {profile.tagline}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            lineHeight: 1.45,
            color: "#cbd5e1",
            maxWidth: 880,
          }}
        >
          {siteDescription}
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 22,
            color: "#94a3b8",
          }}
        >
          {profile.siteUrl.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
