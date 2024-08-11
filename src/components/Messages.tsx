import { type Message as TMessage } from "ai";
import { MessageSquare } from "lucide-react";
import Message from "./Message";

interface MessageProps {
  messages: TMessage[];
}

const Messages = ({ messages }: MessageProps) => {
 // console.log(messages);
  return (
    <div className="flex min-h-screen flex-1 flex-col overflow-y-auto bg-white">
      {messages.length !== 0 ? (
        messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="font-semibold text-xl text-gray-800">
            You&apos;re all set!
          </h3>
          <p className="text-gray-500 text-sm">
            Ask your first question to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
