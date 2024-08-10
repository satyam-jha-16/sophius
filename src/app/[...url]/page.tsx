import ChatWrapper from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";
interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

function reconstructedUrl({ url }: { url: string[] }) {
  const decodedUrl = url.map((part) => decodeURIComponent(part));
  return decodedUrl.join("/");
}

const Page = async ({ params }: PageProps) => {
  // console.log(params.url);
  const sessionCookie = cookies().get("sessionId")?.value;

  const reconstructed = reconstructedUrl({ url: params.url as string[] });
  const isAlreadyIndexed = await redis.sismember("indexed", reconstructed);
  const sessionId = (reconstructed + "--" + sessionCookie).replace(/\//g, "");
  const initialMessages = await ragChat.history.getMessages({
    amount: 10,
    sessionId,
  });
  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructed,
    });

    await redis.sadd("indexed", reconstructed);
  }

  return (
    <div className="bg-white">
          <ChatWrapper sessionId={sessionId} initialMessages={initialMessages } />
    </div>
  );
};

export default Page;
