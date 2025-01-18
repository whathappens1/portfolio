"use client";
import Heading from "@/components/other-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { LoadingButton } from "@/components/loading-button";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

function ContactForm() {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

  const t = useTranslations("Contact");
  const pathname = usePathname();

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1] || "ar";

  const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: name,
      to_name: "Portfolio Contact Messages",
      message: message,
    };
    setIsLoading(true);
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        console.log("done");
        setEmail("");
        setName("");
        setMessage("");
        toast.success(t("success"));
      })
      .catch((error: any) => {
        console.error("Error sending email:", error);
        toast.error(t("error"));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background backdrop-blur-md w-full px-8 py-16 rounded-xl max-w-screen-sm mx-auto border relative z-20"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Heading
          title={t("title")}
          description={t("description")}
          className="mb-[3vh] text-center"
        />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <form
          onSubmit={submitEmail}
          className="mt-5 mx-auto w-full"
          dir={currentLocale === "ar" ? "rtl" : "ltr"}
        >
          <div>
            <Input
              placeholder={t("inputs.name")}
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
              required
              dir={currentLocale === "ar" ? "rtl" : "ltr"}
              disabled={isLoading}
              className="mb-3 text-start"
            />
          </div>
          <div>
            <Input
              placeholder={t("inputs.email")}
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              required
              dir={currentLocale === "ar" ? "rtl" : "ltr"}
              disabled={isLoading}
              type="email"
              className="mb-3 text-start"
            />
          </div>

          <div>
            <Textarea
              placeholder={t("inputs.message")}
              value={message || ""}
              onChange={(e) => setMessage(e.target.value)}
              required
              dir={currentLocale === "ar" ? "rtl" : "ltr"}
              disabled={isLoading}
              className="mb-3"
            />
          </div>
          <div>
            <LoadingButton
              loading={isLoading}
              variant="default"
              size={"lg"}
              disabled={isLoading}
              className="w-full "
              type="submit"
            >
              {t("submit")}
            </LoadingButton>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default ContactForm;
