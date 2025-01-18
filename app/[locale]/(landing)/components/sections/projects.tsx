"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const t = useTranslations("Header.Projects");
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "ar";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="flex my-16 flex-col items-center justify-between py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full space-y-8"
        dir={currentLocale === "ar" ? "rtl" : "ltr"}
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            {t("Title")}
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            {t("Description")}
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 flex-wrap"
        >
          {[1, 2].map((project) => (
            <motion.div
              key={project}
              variants={item}
              className="group w-full max-w-[400px] h-auto bg-card backdrop-blur-sm rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-sm"
            >
              <Link
                href={t(`Project${project}.ReviewLink`)}
                target="_blank"
                className="block"
              >
                <div className="relative w-full">
                  <img
                    src={t(`Project${project}.ImageUrl`)}
                    alt={t(`Project${project}.Title`)}
                    className="object-contain bg-white cursor-pointer w-full h-full"
                  />
                </div>
              </Link>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {t(`Project${project}.Title`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`Project${project}.Description`)}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    {t("TechStack")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {t
                      .raw(`Project${project}.TechStack`)
                      .map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20
                                transition-colors duration-300 hover:bg-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>

                <Link
                  href={t(`Project${project}.ReviewLink`)}
                  target="_blank"
                  className="block mt-6"
                >
                  <Button
                    variant="default"
                    className="w-full text-center group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300
                              flex items-center justify-center gap-2"
                  >
                    {t("ViewReview")}
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
