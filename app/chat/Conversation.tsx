import { ConversationProps } from "./types";

export default function Conversation({ messages }: ConversationProps) {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <strong>{message.role}:</strong> {message.content}
        </div>
      ))}
    </div>
  );
}