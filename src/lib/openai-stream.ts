export type ChatGPTAgent = "user" | "system";

// the data format openai expects
export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}
