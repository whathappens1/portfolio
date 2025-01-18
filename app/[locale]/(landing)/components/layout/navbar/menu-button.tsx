"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ListItem } from "./navbar";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { motion, AnimatePresence } from "framer-motion";
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

              <Link href={`/${currentLocale}/contact`}>
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
              <div className="relative">
                <li
                  onClick={toggleMoreList}
                  className={`p-1 m-2 hover:bg-muted rounded-md transition-all group px-3 cursor-pointer flex items-center gap-2`}
                >
                  {t("Services")}
                  <motion.div
                    animate={{ rotate: moreListOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className="relative top-[1px] h-3 w-3"
                      aria-hidden="true"
                    />
                  </motion.div>
                </li>
                <AnimatePresence>
                  {moreListOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ originY: 0 }}
                      className="relative top-full left-0 w-full overflow-hidden"
                    >
                      <NavigationMenu
                        className="flex flex-col"
                        dir={currentLocale === "ar" ? "rtl" : "ltr"}
                      >
                        <ListItem
                          title={t("AdministrativeConsultingServices.title")}
                        >
                          {t("AdministrativeConsultingServices.description")}
                        </ListItem>

                        <ListItem
                          title={t("ConciergeServices.title")}
                          href={`/${currentLocale}/services/concierge`}
                        >
                          {t("ConciergeServices.description")}
                        </ListItem>
                        <ListItem
                          title={t("ExhibitionAndConferenceOrganization.title")}
                        >
                          {t("ExhibitionAndConferenceOrganization.description")}
                        </ListItem>
                      </NavigationMenu>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href={`/${currentLocale}/services/concierge`}>
                <li
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                  className={`p-1 m-2 hover:bg-muted rounded-md transition-all px-3 cursor-pointer flex items-center gap-2 ${
                    pathname == "/services/concierge" && "font-medium bg-muted"
                  }`}
                >
                  {t("ConciergeServices.title")}
                </li>
              </Link>
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
            </ul>
          </nav>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default MenuButton;
