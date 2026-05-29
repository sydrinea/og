import satori from "satori";
import { Resvg, initWasm } from "@resvg/resvg-wasm";
import resvgWasm from "@resvg/resvg-wasm/index_bg.wasm";

export interface Env {
  ONYX: R2Bucket;
}

let wasmInitialized = false;

async function ensureWasm() {
  if (!wasmInitialized) {
    await initWasm(resvgWasm);
    wasmInitialized = true;
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const params = new URL(request.url).searchParams;
    const title = params.get("title");
    const description = params.get("description");

    const missing = [];
    if (!title) missing.push("title");
    if (!description) missing.push("description");

    if (missing.length > 0) {
      return Response.json(
        {
          message: `Missing required parameters: ${new Intl.ListFormat("en-us", {
            style: "short",
            type: "conjunction",
          }).format(missing)}`,
        },
        { status: 400 }
      );
    }

    const [fontObj] = await Promise.all([
      env.ONYX.get("InclusiveSans.ttf"),
      ensureWasm(),
    ]);

    if (!fontObj) {
      return Response.json({ message: "Font not found in R2" }, { status: 500 });
    }

    const font = await fontObj.arrayBuffer();

    const svg = await satori(
      {
        type: "div",
        props: {
          style: {
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
          },
          children: [
            {
              type: "img",
              props: {
                style: {
                  borderRadius: "100%",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  margin: "50px",
                },
                width: 50,
                height: 50,
                src: "https://avatars.githubusercontent.com/u/68250402?v=4",
              },
            },
            {
              type: "p",
              props: {
                style: { color: "#4c4f69", fontSize: 45, fontWeight: "bolder" },
                children: title,
              },
            },
            {
              type: "p",
              props: {
                style: { color: "#6c6f85", fontSize: 30, fontWeight: "lighter" },
                children: description,
              },
            },
            {
              type: "p",
              props: {
                style: {
                  position: "absolute",
                  bottom: 3,
                  left: 0,
                  color: "#7287fd",
                  margin: "50px",
                  fontSize: 30,
                  fontWeight: "bolder",
                },
                children: "Sydney Newmark",
              },
            },
          ],
        },
      },
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

    const png = new Resvg(svg).render().asPng();

    return new Response(png, {
      headers: { "Content-Type": "image/png" },
    });
  },
};
