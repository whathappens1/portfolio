"use client";

import { useTranslations } from "next-intl";
import ContactForm from "../forms/contact-form";
import Hero from "../sections/hero";

export default function HomePage() {
  const t = useTranslations("Services");

  return (
    <>
      <main className="flex max-w-screen-lg min-h-screen flex-col justify-center mx-auto py-16  lg:px-24 md:px-16 sm:px-8 px-4">
        <Hero />
        <ContactForm />
      </main>
    </>
  );
}
