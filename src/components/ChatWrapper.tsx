"use client";
import { Message, useChat } from "ai/react";
import { ChatInput } from "./ChatInput";
import Messages from "./Messages";

const ChatWrapper = ({ sessionId, initialMessages}: { sessionId: string, initialMessages : Message[] }) => {
  const { messages, input, handleInputChange, handleSubmit, setInput } =
    useChat({
      api: "/api/chat-stream",
      body: {
        sessionId,
      },
      initialMessages,
    });

  return (
    <div className="relative min-h-full bg-white flex divide-y divide-gray-200 flex-col justify-between gap-2">
      <div className="flex-1 text-gray-800 bg-gray-100 justify-between flex flex-col">
        <Messages messages={messages} />
      </div>
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
      />
    </div>
  );
};

export default ChatWrapper;
