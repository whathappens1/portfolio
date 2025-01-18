"use client"

import * as React from "react"
import { Moon, MoonIcon, Sun, MonitorIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const t = useTranslations("Header.ModeToggle");
  const pathname = usePathname();

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1] || "ar";

  return (
    <DropdownMenu dir={currentLocale === "ar" ? "rtl" : "ltr"}>
      <DropdownMenuTrigger asChild dir={currentLocale === "ar" ? "rtl" : "ltr"}>
        <Button variant="outline" className="border border-zinc-400" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t("text")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="flex items-center gap-2" onClick={() => setTheme("light")}>
          <Sun className="h-4 w-4" />
          {t("light")}
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2" onClick={() => setTheme("dark")}>
          <Moon className="h-4 w-4" />
          {t("dark")}
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2" onClick={() => setTheme("system")}>
          <MonitorIcon className="h-4 w-4" />
          {t("system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
