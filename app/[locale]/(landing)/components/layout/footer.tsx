"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const pathname = usePathname();

  const t = useTranslations("Footer");

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1] || "ar";
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <footer
        className="border-t relative backdrop-blur-md"
        dir={currentLocale === "ar" ? "rtl" : "ltr"}
      >
        <div className="mx-auto relative max-w-screen-lg p-4 py-6 lg:py-8">
          <div className="sm:flex sm:items-center sm:justify-between px-4">
            <div>
              <span
                className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex items-center"
                dir={currentLocale === "ar" ? "rtl" : "ltr"}
              >
                {t("allRightsReserved")}{" "}
                <Link
                  href={`/${currentLocale}`}
                  className="hover:underline text-primary font-medium mx-1"
                >
                  {t("Name")}
                </Link>
                © {currentYear}.
              </span>
            </div>

            <div className="flex mt-4 gap-4 sm:justify-center sm:mt-0">
              <a
                href="https://x.com/whathappens_1/"
                className="text-gray-500 transition-all hover:bg-muted p-2 rounded-md hover:-translate-y-1"
              >
                <FaXTwitter strokeWidth={1.25} fontSize={20} />

                <span className="sr-only">X page</span>
              </a>
              <a
                href="https://github.com/whathappens1/"
                className="text-gray-500 transition-all hover:bg-muted p-2 rounded-md hover:-translate-y-1"
              >
                <FaGithub strokeWidth={1.25} fontSize={20} />

                <span className="sr-only">Github page</span>
              </a>
            
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
