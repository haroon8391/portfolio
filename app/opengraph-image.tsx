import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0c0a09",
          color: "#f5f5f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#fb923c", fontFamily: "sans-serif" }}>
          {profile.role}
        </div>
        <div style={{ fontSize: 96, lineHeight: 1.05 }}>{profile.name}</div>
        <div style={{ fontSize: 28, color: "#a8a29e", fontFamily: "sans-serif" }}>
          React · Next.js · NestJS · PostgreSQL · Generative AI
        </div>
      </div>
    ),
    size,
  );
}
