import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Niche - Building blocks for your Next.js project";
export const contentType = "image/png";

export default async function OG() {
  const sfPro = await fetch(
    new URL("../client/fonts/SF-Pro-Display-Medium.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to right bottom, rgba(225, 225, 225, 0.9), rgba(225, 225, 225, 1)), url('/waitlist-bg-image.jpg')",
        }}
      >
        {/* <img
          src={new URL("../public/logo.png", import.meta.url).toString()}
          alt="Niche Logo"
          tw="w-20 h-20 mb-4 opacity-95"
        /> */}

        <h1
          style={{
            fontSize: "100px",
            fontFamily: "SF Pro",
            background:
              "linear-gradient(to bottom right, #ff5e03 21.66%, #2e1100 86.47%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "5.2rem",
            letterSpacing: "-0.02em",
          }}
        >
          Niche
        </h1>
        <p
          style={{
            fontSize: "36px",
            marginTop: "27px",
            color: "#6B7280",
            textAlign: "center",
          }}
        >
          Sell your brand. Sell your products. Buy what you love.
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "SF Pro",
          data: sfPro,
        },
      ],
    }
  );
}
