"use client";

import { TriangleAlert } from "lucide-react";

export default function ErrorPage({ error } : {error: Error}) {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center w-full py-24 sm:px-24 px-8"
      dir="rtl"
    >
      <div className="mt-[-15vh]">
        <div>
          <TriangleAlert
            size={90}
            strokeWidth={1.5}
            className="mx-auto my-[3vh]"
          />
        </div>
        <h1 className="font-semibold text-center text-3xl">حدث خطأ ما</h1>
        <p className="font-medium text-center text-base opacity-75">
          {error.message || "عذراً حاول مرة اخرى , قد التكون المشكلة من لدينا"}
        </p>
      </div>
    </main>
  );
}
