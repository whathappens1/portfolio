"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Hero() {
  const t = useTranslations("Header.Hero");
  const pathname = usePathname();

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1] || "ar";

  return (
    <section className="flex my-16 bg-zinc-950 flex-col-reverse md:flex-row items-center justify-between py-16">
      <div
        className="flex-1 space-y-6"
        dir={currentLocale === "ar" ? "rtl" : "ltr"}
      >
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {t("Welcome")}
          <br />
          <span className="text-primary">{t("Name")}</span>
        </h1>

        <p className="text-muted-foreground text-lg">{t("Description")}</p>

        <div
          className="flex gap-4"
          dir={currentLocale === "ar" ? "rtl" : "ltr"}
        >
          <Link href="/#contact">
            <Button className="flex items-center gap-2">
              {t("Actions.ContactUs")}
              {currentLocale === "ar" ? (
                <ArrowLeft className="h-4 w-4" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </Button>
          </Link>

          <Link href="/cv.pdf">
            <Button variant="outline">{t("Actions.Download")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
