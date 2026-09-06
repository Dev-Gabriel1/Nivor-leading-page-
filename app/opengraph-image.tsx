import { ImageResponse } from "next/og";

export const alt = "Nivor Cardápio Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          background: "radial-gradient(circle at 20% 0%, #13255a 0%, #080b14 42%, #05060b 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 42 }}>
          <div style={{ width: 74, height: 74, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#00b7ff,#7c3cff)", fontWeight: 900, fontSize: 44 }}>N</div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>NIVOR SOLUÇÕES DIGITAIS</div>
        </div>
        <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 900, maxWidth: 950 }}>Seu cardápio profissional. Seus pedidos. Sua marca.</div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#cbd5e1" }}>Cardápio digital + painel de gestão por R$ 79,90/mês.</div>
      </div>
    ),
    size
  );
}
