import type { RequestHandler } from "express";
import { z } from "zod";
import type { Intake } from "@shared/api";

const IntakeSchema = z.object({
  sessionId: z.string().optional(),
  name: z.string().optional(),
  age: z.number().int().min(0).max(120).optional(),
  primaryConcern: z.string().optional(),
  constitution: z.string().optional(),
  allergies: z.string().optional(),
  preferredDates: z.string().optional(),
  preferredTimes: z.string().optional(),
  notes: z.string().optional(),
});

const store: Intake[] = [];

export function addIntakeRaw(data: Omit<Intake, "id" | "createdAt">) {
  const item: Intake = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...data,
  };
  store.push(item);
  return item;
}

export const addIntakeFromJson: RequestHandler = (req, res) => {
  const parsed = IntakeSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid intake", details: parsed.error.flatten() });
  }
  const saved = addIntakeRaw(parsed.data);
  res.json({ item: saved });
};

export const listIntakes: RequestHandler = (_req, res) => {
  res.json({ items: store.slice().reverse() });
};
