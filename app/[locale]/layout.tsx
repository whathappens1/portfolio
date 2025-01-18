import type { Metadata } from "next";
import { Tajawal } from "next/font/google";

import NextTopLoader from "nextjs-toploader";
import { SidebarProvider } from "@/context/sidebar-context";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme-provider";

const font = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Header");

  return {
    title: {
      default: t("Logo"),
      template: `${t("Logo")} - %s`,
    },
    openGraph: {
      type: "website",
      siteName: t("Logo"),
      url: "https://ncmc.com.sa/",
      locale: "ar_AR",
    },
    keywords: [],
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta property="og:image:alt" content="تميم السهلي" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta
          name="og:image"
          content={"https://ncmc.com.sa/assets/opengraph-image.png"}
        />
        <meta property="twitter:image:alt" content="تميم السهلي" />
        <meta
          name="twitter:card"
          content="https://ncmc.com.sa/assets/opengraph-og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="موقع تميم السهلي" />
        <meta name="twitter:description" content={``} />
        <meta
          name="twitter:image"
          content={"https://ncmc.com.sa/assets/opengraph-og.png"}
        />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="512" />
        <meta name="twitter:image:height" content="512" />
      </head>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color={"hsl(var(--primary))"}
            initialPosition={0.08}
            height={3}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px hsl(var(--muted-foreground)),0 0 5px hsl(var(--muted-foreground))"
            zIndex={1600}
          />
          <SidebarProvider>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
            <Analytics />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
