import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let payload: unknown = null;

    if (contentType.includes("application/json")) {
      try {
        payload = await request.json();
      } catch {
        payload = null;
      }
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      try {
        const formData = await request.formData();
        const entries: Record<string, string> = {};
        formData.forEach((value, key) => {
          entries[key] = typeof value === "string" ? value : value.name;
        });
        payload = entries;
      } catch {
        payload = null;
      }
    } else {
      try {
        const text = await request.text();
        if (text) {
          try {
            payload = JSON.parse(text);
          } catch {
            payload = text;
          }
        }
      } catch {
        payload = null;
      }
    }

    const isObject = payload !== null && typeof payload === "object" && !Array.isArray(payload);
    const keys = isObject ? Object.keys(payload as Record<string, unknown>) : [];

    console.log("[Eduzz Entrega Webhook]", {
      timestamp: new Date().toISOString(),
      contentType,
      receivedKeys: keys.length > 0 ? keys : typeof payload,
      hasPayload: payload !== null && (!isObject || keys.length > 0),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Requisição recebida com sucesso.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Eduzz Entrega Webhook] Erro ao processar requisição:", error);
    return NextResponse.json(
      {
        success: true,
        message: "Requisição recebida com sucesso.",
      },
      { status: 200 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Endpoint de entrega customizada Eduzz ativo.",
    },
    { status: 200 }
  );
}
