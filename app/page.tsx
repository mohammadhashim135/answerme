import QuizSettings from "@/components/quiz-settings";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 shadow-lg w-full md:w-[90%] lg:w-[70%] max-w-4xl md:rounded-lg mx-auto mt-10">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-white  text-center py-4">
        Welcome to AnswerMe
      </h1>
      <Separator className="border-t-2 border-white my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:px-8 py-1 gap-6 bg-white rounded-lg shadow-inner">
        <div className="relative h-full flex items-center justify-center">
          <Image
            src={"/hero.jpg"}
            alt="think"
            priority
            width={450}
            height={450}
            className="object-cover object-center rounded-full shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <QuizSettings />
        </div>
      </div>
    </div>
  );
}