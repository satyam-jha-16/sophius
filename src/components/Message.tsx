import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div
      className={cn("py-4", {
        "bg-gray-100": isUserMessage,
        "bg-white": !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="max-w-3xl mx-auto flex items-start gap-2.5">
          <div
            className={cn(
              "size-10 shrink-0 aspect-square rounded-full border flex justify-center items-center",
              {
                "bg-blue-100 border-blue-300 text-blue-600": isUserMessage,
                "bg-gray-100 border-gray-300 text-gray-600": !isUserMessage,
              },
            )}
          >
            {isUserMessage ? (
              <User className="size-5" />
            ) : (
              <Bot className="size-5" />
            )}
          </div>
          <div className="flex flex-col ml-6 w-full">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-900">
                {isUserMessage ? "You" : "Sophius"}
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-700">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
