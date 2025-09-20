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

const GEMINI_MODEL = "gemini-1.5-pro";

const KNOWLEDGE_SNIPPET = `Panchakarma Overview\n• Five main procedures: Vamana (therapeutic emesis), Virechana (purgation), Basti (medicated enema), Nasya (nasal therapy), Raktamokshana (bloodletting).\n• Phases: Purva Karma (prep: Deepana/Pachana, Snehana, Swedana), Pradhana Karma (main procedures), Paschat Karma (diet, lifestyle, Rasayana).\n• Benefits: detoxification, dosha balance, improved digestion and sleep, reduced stress, better skin/joint health.\n• Contraindications (examples): pregnancy, acute infections/fever, severe cardiac disease, active cancer—requires qualified supervision.\n• Common conditions addressed: arthritis, asthma/sinusitis, IBS/constipation, stress/insomnia, skin disorders, metabolic issues.\n`;

function buildPrompt(
  userMessage: string,
  history?: { role: string; content: string }[],
) {
  const system = `You are an expert assistant for AyurSutra – Panchakarma patient management and automated therapy scheduling software.
Your style: warm, friendly, and encouraging. Always begin with a brief greeting (e.g., "Hi there! 👋").
Task: Provide comprehensive, detailed, and structured answers about AyurSutra, Ayurveda, Panchakarma modules, features, benefits, onboarding, registration, pricing considerations, security, and related usage.
Format: Use short paragraphs and bullet points with clear section labels such as: Overview, Details, How AyurSutra Helps, Steps/Next Actions, and Tips. Include concrete examples, checklists, and step-by-step guidance when useful.
Scope control: If the question is out of scope, ask a brief clarifying question and gently redirect toward relevant AyurSutra topics.
Tone: Professional, precise, and helpful.`;

  const historyText = (history ?? [])
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n");

  return `${system}\n\nKnowledge reference (use when relevant):\n${KNOWLEDGE_SNIPPET}\n\n${historyText ? historyText + "\n\n" : ""}User: ${userMessage}`;
}

function ensureGreeting(text: string) {
  const startsWithGreeting = /^(hi|hello|hey|namaste|greetings)/i.test(
    text.trim(),
  );
  const greeting = "Hi there! 👋 ";
  return startsWithGreeting ? text : greeting + text;
}

function offlineAnswer(message: string) {
  const m = message.toLowerCase();
  const bullets = (lines: string[]) => lines.map((l) => `• ${l}`).join("\n");
  const section = (title: string, lines: string[]) => `${title}:\n${bullets(lines)}`;

  if (/(register|signup|sign up|onboard)/.test(m)) {
    return [
      section("Overview", [
        "Create your clinic account, add staff, and start onboarding patients in minutes.",
      ]),
      section("Steps", [
        "Open the Registration page from the header.",
        "Enter clinic and admin details (name, email, phone).",
        "Add initial patient profiles or import via CSV (optional).",
        "Configure therapy schedules, reminders, and notification preferences.",
      ]),
      section("Tips", [
        "Prepare a CSV with patient names, contact info, and known conditions for faster import.",
        "Set default therapy durations and room availability to automate scheduling.",
      ]),
    ].join("\n\n");
  }
  if (/(price|cost|plan|trial)/.test(m)) {
    return [
      section("Overview", [
        "Flexible plans for solo practitioners up to multi-branch clinics.",
      ]),
      section("What to Expect", [
        "Tiered pricing by number of staff, patients, and advanced modules.",
        "Free trial and migration assistance are typically available.",
      ]),
      section("Next Steps", [
        "Use the footer contact options to get current pricing and a tailored recommendation.",
      ]),
    ].join("\n\n");
  }
  if (/(panchakarma|therapy|procedure|detox)/.test(m)) {
    return [
      section("Overview", [
        "Support for all five classical Panchakarma procedures (Vamana, Virechana, Basti, Nasya, Raktamokshana).",
        "Track pre‑procedure (Purva Karma), main therapy (Pradhana Karma), and post‑procedure (Paschat Karma).",
      ]),
      section("How AyurSutra Helps", [
        "Automated therapy scheduling with resource and room allocation.",
        "Reminders for patients and staff with customizable templates.",
        "Progress notes, vitals tracking, and follow‑up plans in one place.",
      ]),
      section("Example", [
        "Set a 7‑day Virechana plan with daily checklists (diet, vitals, medications).",
        "System schedules sessions, blocks rooms, and notifies staff and patients automatically.",
      ]),
    ].join("\n\n");
  }
  if (/(feature|module|what can|capab)/.test(m)) {
    return [
      section("Core Modules", [
        "Patient registration and profile management with quick intake forms.",
        "Automated therapy scheduling, reminders, and resource planning.",
        "Clinical notes, vitals, and progress tracking.",
        "Analytics dashboards for outcomes, utilization, and adherence.",
      ]),
      section("Workflow", [
        "Create plan → assign therapies → system schedules → monitor progress → follow‑up.",
      ]),
    ].join("\n\n");
  }
  if (/(support|help|contact)/.test(m)) {
    return [
      section("Get Help", [
        "Use the footer contact options to reach support.",
        "Share your clinic size and current workflow for faster guidance.",
      ]),
      section("Typical Response Time", [
        "Within one business day.",
      ]),
    ].join("\n\n");
  }
  return [
    section("On Topic", [
      "I focus on AyurSutra and Panchakarma workflows.",
      "Ask about registration, features, scheduling, or therapy plans for detailed guidance.",
    ]),
    section("Tip", [
      "Include your clinic size and main therapies to get tailored suggestions.",
    ]),
  ].join("\n\n");
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
        .status(200)
        .json({ reply: ensureGreeting(offlineAnswer(message)) });
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
            temperature: 0.2,
            topK: 64,
            topP: 0.95,
            maxOutputTokens: 2048,
          },
        }),
      },
    );

    if (!response.ok) {
      const _text = await response.text().catch(() => "");
      return res
        .status(200)
        .json({ reply: ensureGreeting(offlineAnswer(message)) });
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
        .json({ reply: ensureGreeting(offlineAnswer(message)) });
    }

    res.status(200).json({ reply: ensureGreeting(text) });
  } catch (err) {
    return res
      .status(200)
      .json({ reply: ensureGreeting(offlineAnswer(req.body?.message ?? "")) });
  }
};
