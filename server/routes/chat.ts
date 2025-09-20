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
Your style: warm, friendly, encouraging. Always begin with a short greeting (e.g., "Hi there! 👋"), use positive language, and avoid negativity.
Answer questions ONLY about AyurSutra, Ayurveda, Panchakarma modules, features, benefits, onboarding, registration, and related usage.
Be accurate and concise, prefer short paragraphs or bullet points. If the user asks something outside this scope, gently redirect and suggest a relevant AyurSutra topic.`;

  const historyText = (history ?? [])
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n");

  return `${system}\n\n${historyText ? historyText + "\n\n" : ""}User: ${userMessage}`;
}

function ensureGreeting(text: string) {
  const startsWithGreeting = /^(hi|hello|hey|namaste|greetings)/i.test(text.trim());
  const greeting = "Hi there! 👋 ";
  return startsWithGreeting ? text : greeting + text;
}

function offlineAnswer(message: string) {
  const m = message.toLowerCase();
  const bullets = (lines: string[]) => lines.map((l) => `• ${l}`).join("\n");

  if (/(register|signup|sign up|onboard)/.test(m)) {
    return bullets([
      "You can register from the header's Registration page.",
      "Add patient details to create profiles in seconds.",
      "Start scheduling therapies right after signup.",
    ]);
  }
  if (/(price|cost|plan|trial)/.test(m)) {
    return bullets([
      "Flexible plans tailored for clinics of any size.",
      "Use the footer contact options for current pricing and trials.",
    ]);
  }
  if (/(panchakarma|therapy|procedure|detox)/.test(m)) {
    return bullets([
      "Track therapies with clearly defined Panchakarma phases.",
      "Automate schedules, reminders, and resources.",
      "Capture notes, vitals, and follow‑ups effortlessly.",
    ]);
  }
  if (/(feature|module|what can|capab)/.test(m)) {
    return bullets([
      "Patient registration and profile management.",
      "Automated therapy scheduling and reminders.",
      "Progress tracking, notes, and analytics dashboards.",
    ]);
  }
  if (/(support|help|contact)/.test(m)) {
    return bullets([
      "Reach support via the footer contact options.",
      "We usually reply within one business day.",
    ]);
  }
  return bullets([
    "I focus on AyurSutra and Panchakarma workflows.",
    "Ask about registration, features, or scheduling to get the most helpful tips.",
  ]);
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
      return res.status(200).json({ reply: ensureGreeting(offlineAnswer(message)) });
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
      const _text = await response.text().catch(() => "");
      return res.status(200).json({ reply: ensureGreeting(offlineAnswer(message)) });
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
      return res.status(200).json({ reply: ensureGreeting(offlineAnswer(message)) });
    }

    res.status(200).json({ reply: ensureGreeting(text) });
  } catch (err) {
    return res.status(200).json({ reply: ensureGreeting(offlineAnswer(req.body?.message ?? "")) });
  }
};
