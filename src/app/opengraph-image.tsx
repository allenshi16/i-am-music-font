import { ImageResponse } from "next/og";

export const alt = "I AM MUSIC Font Generator — layered type experiment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#0d0d0e", color: "#f0ece4", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: "64px 72px", width: "100%" }}>
      <div style={{ color: "#d8ff46", display: "flex", fontFamily: "monospace", fontSize: 24, letterSpacing: "0.2em" }}>IAM / TYPE EXPERIMENT 001</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ color: "#f0ece4", display: "flex", fontFamily: "Georgia", fontSize: 108, lineHeight: 0.8 }}>I AM</div>
        <div style={{ color: "#d8ff46", display: "flex", fontFamily: "Georgia", fontSize: 126, fontStyle: "italic", lineHeight: 0.9 }}>MUSIC FONT</div>
      </div>
      <div style={{ color: "#aaa69e", display: "flex", fontFamily: "monospace", fontSize: 20, justifyContent: "space-between", letterSpacing: "0.12em" }}><span>CREATE / TUNE / EXPORT</span><span>NOT OFFICIAL</span></div>
    </div>,
    { ...size },
  );
}
