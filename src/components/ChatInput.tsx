"use client";

import { Button } from "@nextui-org/react";
import { type useChat } from "ai/react";
import { Send } from "lucide-react";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatInputProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
}

export const ChatInput = ({
  handleInputChange,
  handleSubmit,
  input,
  setInput,
}: ChatInputProps) => {
  return (
    <div className="z-10 bg-white absolute bottom-0 left-0 w-full shadow-lg">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex flex-col w-full flex-grow p-4 lg:p-6">
            <form onSubmit={handleSubmit} className="relative">
              <textarea
                autoFocus
                onChange={handleInputChange}
                value={input}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                    setInput("");
                  }
                }}
                placeholder="Type your message..."
                className="resize-none bg-gray-100 rounded-lg text-base border-2 border-gray-300 focus:border-blue-500 p-3 w-full h-20 focus:outline-none"
              />

              <Button
                size="sm"
                type="submit"
                className="absolute z-10 right-1 bottom-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
