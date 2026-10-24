import { ImageResponse } from "next/og";

export const alt = "Ovelnoria — Senior Software Studio for Fast-Moving Teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fcfbfa",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 18% 20%, rgba(88,80,236,0.14), transparent 50%), radial-gradient(circle at 85% 80%, rgba(180,83,9,0.1), transparent 45%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 22,
            background: "#16141d",
          }}
        >
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="7.5"
              stroke="#ffffff"
              strokeWidth="1.6"
            />
            <circle cx="16.3" cy="7.7" r="2.1" fill="#ffffff" />
          </svg>
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 30,
            fontSize: 60,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "#16141d",
          }}
        >
          ovelnoria
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 16,
            fontSize: 24,
            color: "#615b6c",
          }}
        >
          Senior software studio for fast-moving teams
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 6,
            background: "linear-gradient(90deg, #4338ca, #5850ec)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

export const dynamic = "force-static";
