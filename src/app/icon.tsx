import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 14,
        }}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
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
