export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ConversationProps = {
  messages: ChatMessage[];
};
