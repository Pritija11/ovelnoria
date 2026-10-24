import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16141d",
        }}
      >
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="7.5"
            stroke="#ffffff"
            strokeWidth="1.8"
          />
          <circle cx="16.3" cy="7.7" r="2.3" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size },
  );
}

export const dynamic = "force-static";
