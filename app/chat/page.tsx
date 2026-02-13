"use client";

import { useState } from "react";
import type { ChatMessage } from "./types";
import { appendUserMessageWithPlaceholderReply } from "./helper";
import Textbox from "@/components/textbox";
import Conversation from "./Conversation";
import PageTitle from "./title";

export default function ChatPage() {
  const [conversationMessages, setConversationMessages] = useState<
    ChatMessage[]
  >([]);
  const [currentInputText, setCurrentInputText] = useState("");

  return (
    <div>
      <PageTitle />

      <Conversation messages={conversationMessages} />

      <div>
        <Textbox
          value={currentInputText}
          onChange={setCurrentInputText}
          onEnter={() =>
            appendUserMessageWithPlaceholderReply(
              currentInputText,
              setConversationMessages,
              setCurrentInputText,
            )
          }
        />

        <button
          onClick={() =>
            appendUserMessageWithPlaceholderReply(
              currentInputText,
              setConversationMessages,
              setCurrentInputText,
            )
          }
        >
          Send
        </button>
      </div>
    </div>
  );
}
