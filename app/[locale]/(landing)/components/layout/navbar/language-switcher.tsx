"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const KSAFlag = () => (
  <img src="/assets/images/flags/ksa.svg" alt="KSA Flag" className="w-5 h-5" />
);

const UKFlag = () => (
  <img src="/assets/images/flags/uk.svg" alt="UK Flag" className="w-5 h-5" />
);

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Header.LanguageSwitcher");

  const handleLanguageChange = (newLocale: string) => {
    // Get the current path without the locale
    const currentPath = pathname.split("/").slice(2).join("/") || "";
    // Navigate to the new locale path
    router.push(`/${newLocale}/${currentPath}`);
  };

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1] || "ar";

  return (
    <Select
      defaultValue={currentLocale}
      dir={currentLocale === "ar" ? "rtl" : "ltr"}
      onValueChange={handleLanguageChange}
    >
      <SelectTrigger className="w-[120px] bg-white/70 rounded-full !outline-none !ring-0 !ring-offset-0 border-zinc-400 backdrop-blur-lg">
        <SelectValue placeholder={t("ChooseLanguage")} />
      </SelectTrigger>
      <SelectContent dir={currentLocale === "ar" ? "rtl" : "ltr"}>
        <SelectGroup dir={currentLocale === "ar" ? "rtl" : "ltr"}>
          <SelectLabel dir={currentLocale === "ar" ? "rtl" : "ltr"}>
            {t("ChooseLanguage")}
          </SelectLabel>
          <SelectItem value="ar">
            <div className="flex items-center gap-2">
              <KSAFlag />
              <span>{t("AR")}</span>
            </div>
          </SelectItem>
          <SelectItem value="en">
            <div className="flex items-center gap-2">
              <UKFlag />
              <span>{t("EN")}</span>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
