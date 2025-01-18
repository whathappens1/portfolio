"use client";

import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function ErrorPage() {
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
        <h1 className="font-semibold text-center text-3xl">
          عذراً. خطأ رقم 404
        </h1>
        <p className="font-medium text-center text-base opacity-75">
          لم نتمكن من العثور على الصفحة التي كنت تبحث عنها :(
        </p>

        <Link href={"/"}>
          <Button className="mx-auto flex justify-center mt-[3vh]">العودة إلى الصفحة الرئيسية</Button>
        </Link>
      </div>
    </main>
  );
}
