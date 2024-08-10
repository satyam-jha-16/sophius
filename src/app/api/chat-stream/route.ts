import { ragChat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { messages, sessionId } = await request.json();

  const lastMessage = messages[messages.length - 1].content;

  const res = await ragChat.chat(lastMessage, {
    streaming: true,
    sessionId,
  });

  // console.log("response ", res);
  // 
  return aiUseChatAdapter(res);
};
