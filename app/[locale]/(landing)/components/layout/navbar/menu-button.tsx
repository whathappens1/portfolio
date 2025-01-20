"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

function MenuButton() {
  const pathname = usePathname();

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const [moreListOpen, setMoreListOpen] = useState<boolean>(false);
  const toggleMoreList = () => setMoreListOpen(!moreListOpen);
  const t = useTranslations("Header.NavItems");

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1] || "ar";

  return (
    <Drawer
      open={drawerOpen}
      onClose={() => {
        setDrawerOpen(false);
      }}
      onOpenChange={(open: any) => !open && setDrawerOpen(false)}
    >
      <DrawerTrigger>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="block lg:hidden"
          onClick={() => {
            setDrawerOpen(true);
          }}
        >
          <Menu className="size-8" />
        </Button>
      </DrawerTrigger>
      <DrawerContent dir={currentLocale === "ar" ? "rtl" : "ltr"}>
        <DrawerFooter>
          <nav
            className="w-full mr-auto mt-3"
            dir={currentLocale === "ar" ? "rtl" : "ltr"}
          >
            <ul>
              <LanguageSwitcher />
              <Link href={`/${currentLocale}`}>
                <li
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                  className={`p-1 m-2 hover:bg-muted rounded-md transition-all px-3 cursor-pointer flex items-center gap-2 ${
                    pathname == "/" && "font-medium bg-muted"
                  }`}
                >
                  {t("Home")}
                </li>
              </Link>
              <Link href={`/${currentLocale}#projects`}>
              <li
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                  className={`p-1 m-2 hover:bg-muted rounded-md transition-all px-3 cursor-pointer flex items-center gap-2 ${
                    pathname == "/" && "font-medium bg-muted"
                  }`}
                >
                  {t("Projects")}
                </li>
              </Link>
              <Link href={`/${currentLocale}#skills`}>
                <li
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                  className={`p-1 m-2 hover:bg-muted rounded-md transition-all px-3 cursor-pointer flex items-center gap-2 ${
                    pathname == "/" && "font-medium bg-muted"
                  }`}
                >
                  {t("Skills")}
                </li>
              </Link>
              <Link href={`/${currentLocale}#contact`}>
                <li
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                  className={`p-1 m-2 hover:bg-muted rounded-md transition-all px-3 cursor-pointer flex items-center gap-2 ${
                    pathname == "/contact" && "font-medium bg-muted"
                  }`}
                >
                  {t("ContactUs")}{" "}
                </li>
              </Link>
            </ul>
          </nav>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default MenuButton;
