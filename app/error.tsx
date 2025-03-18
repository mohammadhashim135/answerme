"use client";

import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg space-y-6">
        <Image src="/error.jpg" height="200" width="200" alt="Error" className="rounded-full" />
        <h2 className="text-2xl font-semibold text-red-600">Oops! Something went wrong.</h2>
        <p className="text-center text-gray-600">We are sorry for the inconvenience. Please try again later or go back to the previous page.</p>
        <Link className={buttonVariants()} href={"/documents"}>
          Go Back
        </Link>
      </div>
    </div>
  );
}