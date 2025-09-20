/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export type ChatRole = "user" | "assistant" | "system";

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export interface ChatRequest {
  message: string;
  history?: { role: Exclude<ChatRole, "system">; content: string }[];
  sessionId?: string;
}

export interface ChatResponse {
  reply: string;
  intake?: Intake | null;
}

export interface Intake {
  id: string;
  createdAt: string;
  sessionId?: string;
  name?: string;
  age?: number;
  primaryConcern?: string;
  constitution?: string;
  allergies?: string;
  preferredDates?: string;
  preferredTimes?: string;
  notes?: string;
}
