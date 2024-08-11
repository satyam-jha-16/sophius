"use client";
import { Message, useChat } from "ai/react";
import { ChatInput } from "./ChatInput";
import Messages from "./Messages";

const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: Message[];
}) => {
  const { messages, input, handleInputChange, handleSubmit, setInput } =
    useChat({
      api: "/api/chat-stream",
      body: {
        sessionId,
      },
      initialMessages,
    });

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto pb-32">
        {" "}
        {/* Add padding-bottom here */}
        <Messages messages={messages} />
      </div>
      <div className="absolute bottom-0 left-0 w-full mt-10">
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setInput={setInput}
        />
      </div>
    </div>
  );
};

export default ChatWrapper;
