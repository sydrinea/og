import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const title = params.get("title");
  const description = params.get("description");

  const missing = [];
  if (!title) missing.push("title");
  if (!description) missing.push("description");

  if (missing.length > 0) {
    return new Response(
      JSON.stringify({
        message: `Missing required parameters: ${new Intl.ListFormat("en-us", {
          style: "short",
          type: "conjunction",
        }).format(missing)}`,
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const font = await fetch(
    "https://og.sydneyn.dev/static/InclusiveSans.ttf"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          color: "#24273a",
          background: "#eff1f5",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          style={{
            borderRadius: "100%",
            position: "absolute",
            bottom: 0,
            right: 0,
            margin: "50px",
          }}
          width={50}
          height={50}
          src="https://avatars.githubusercontent.com/u/68250402?v=4"
          alt="Sydney Newmark"
        />
        <p style={{ color: "#4c4f69", fontSize: 45, fontWeight: "bolder" }}>
          {title}
        </p>
        <p style={{ color: "#6c6f85", fontSize: 30, fontWeight: "lighter" }}>
          {description}
        </p>
        <p
          style={{
            position: "absolute",
            bottom: 3,
            left: 0,
            color: "#ea76cb",
            margin: "50px",
            fontSize: 30,
            fontWeight: "bolder",
          }}
        >
          Sydney Newmark
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inclusive Sans",
          data: font,
          style: "normal",
        },
      ],
    }
  );
}
