"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MenuButton from "./menu-button";
import dynamic from "next/dynamic";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "./mode-toggle";

function Navbar() {
  const t = useTranslations("Header.NavItems");
  const pathname = usePathname();

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1] || "ar";

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed z-50 top-8 left-0 right-0 transition-all`}
      >
        <div
          className="flex h-16 rounded-full max-w-screen-lg dark:bg-[#f7f7f7]/80 bg-[#f7f7f7] backdrop-blur-lg items-center justify-between lg:px-24 md:px-16 sm:px-8 px-4 sm:mx-auto mx-4 gap-3"
          dir={currentLocale === "ar" ? "rtl" : "ltr"}
        >
          <Link href={`/${currentLocale}`}>
            <Image
              src="/assets/Logo.png"
              className={`overflow-hidden transition-all w-32`}
              alt="logo"
              width={140}
              height={38.67}
              priority
            />
          </Link>
          <div>
            <nav className="hidden md:block w-full" dir={currentLocale === "ar" ? "rtl" : "ltr"}>
              <ul className="flex flex-row items-center gap-8" dir={currentLocale === "ar" ? "rtl" : "ltr"}>
                <Link href={`/${currentLocale}`}>
                  <li className="font-medium sm:text-base text-sm opacity-85 hover:opacity-100 transition-all cursor-pointer  text-black">
                    {t("Home")}
                  </li>
                </Link>
                <Link href={`/${currentLocale}#projects`}>
                  <li className="font-medium sm:text-base text-sm opacity-85 hover:opacity-100 transition-all cursor-pointer  text-black">
                    {t("Projects")}
                  </li>
                </Link>
                <Link href={`/${currentLocale}#contact`}>
                  <li className="font-medium sm:text-base text-sm opacity-85 hover:opacity-100 transition-all cursor-pointer w-full text-black">
                    {t("ContactUs")}
                  </li>
                </Link>
                <LanguageSwitcher />
                <ModeToggle />
              </ul>
            </nav>

            <div className="items-center gap-3 flex md:hidden">
              <MenuButton />
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-1 text-sm leading-snug">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
