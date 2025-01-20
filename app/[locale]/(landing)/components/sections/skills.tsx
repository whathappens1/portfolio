"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const t = useTranslations("Skills");
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
  const skills = [
    { icon: "⚛️", name: "React", description: t("React") },
    { icon: "▲", name: "Next.js", description: t("NextJS") },
    { icon: "📦", name: "Node.js", description: t("NodeJS") },
    { icon: "🔷", name: "TypeScript", description: t("TypeScript") },
    { icon: "💛", name: "JavaScript", description: t("JavaScript") },
    { icon: "🐍", name: "Python", description: t("Python") },
    { icon: "⚡", name: "C++", description: t("CPP") },
    { icon: "🎨", name: "Figma", description: t("Figma") },
  ];

  return (
    <section
      id="skills"
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

    
      </motion.div>
      <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-4"
          dir={currentLocale === "ar" ? "rtl" : "ltr"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
    </section>
  );
}