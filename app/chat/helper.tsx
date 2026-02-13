import type { ChatMessage } from "./types";

export function appendUserMessageWithPlaceholderReply(
  userInput: string,
  updateMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>,
  clearInput: React.Dispatch<React.SetStateAction<string>>
) {
  const trimmedInput = userInput.trim();
  if (!trimmedInput) return;

  const newUserMessage: ChatMessage = {
    role: "user",
    content: trimmedInput,
  };

  const placeholderAssistantReply: ChatMessage = {
    role: "assistant",
    content: "LLM response placeholder",
  };

  updateMessages((previousMessages) => [
    ...previousMessages,
    newUserMessage,
    placeholderAssistantReply,
  ]);

  clearInput("");
}