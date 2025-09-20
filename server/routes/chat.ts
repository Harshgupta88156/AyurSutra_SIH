import type { RequestHandler } from "express";
import { z } from "zod";

const ChatRequestSchema = z.object({
  message: z.string().min(1, "Message is required"),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      }),
    )
    .optional(),
});

const GEMINI_MODEL = "gemini-1.5-flash";

function buildPrompt(
  userMessage: string,
  history?: { role: string; content: string }[],
) {
  const system = `You are an expert assistant for AyurSutra – Panchakarma patient management and automated therapy scheduling software.
Answer questions ONLY about AyurSutra, Ayurveda, Panchakarma modules, features, benefits, onboarding, registration, and related usage.
Be accurate, concise, and respond in clear bullet points where appropriate. If the user asks something outside this scope, politely state that you can only answer questions related to AyurSutra.`;

  const historyText = (history ?? [])
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n");

  return `${system}\n\n${historyText ? historyText + "\n\n" : ""}User: ${userMessage}`;
}

export const handleChat: RequestHandler = async (req, res) => {
  try {
    const parsed = ChatRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ error: "Invalid request", details: parsed.error.flatten() });
    }

    const { message, history } = parsed.data;
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return res
        .status(500)
        .json({ error: "Server not configured with GOOGLE_API_KEY" });
    }

    const prompt = buildPrompt(message, history);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.3,
            topK: 32,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      },
    );

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      return res.status(502).json({ error: "Upstream error", details: text });
    }

    const data = (await response.json()) as any;
    const text =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: any) => p?.text)
        .filter(Boolean)
        .join("\n") ??
      data?.candidates?.[0]?.output ??
      "";

    if (!text) {
      return res
        .status(200)
        .json({
          reply: "I couldn't generate a response right now. Please try again.",
        });
    }

    res.status(200).json({ reply: text });
  } catch (err) {
    res.status(500).json({ error: "Unexpected server error" });
  }
};
